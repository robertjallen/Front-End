import React, {useState, useEffect} from 'react'
import Tour from '../TourCard'
import axios from 'axios'
import {useParams} from 'react-router-dom';
import {useLocalStorage} from '../hooks/LocalStorageHook.js'
import {Link} from 'react-router-dom';
import {Wrapper} from '../../Styles/StyledWrapper'
import Anime, {anime} from 'react-anime';

export default function Search({placeholder, handleChange}) {
    const {id} = useParams();
    const [tours, setTours] = useState([]);
   
    const [search, setSearch] = useState('');
     const [query, setQuery] = useState('');

  
    let url= `https://wanderlust-shouts.herokuapp.com/api/tours/?location=${query}/?title=${query}`
    
      useEffect(() => {
        axios
          .get(url)
          .then(response => {
            console.log(response.data)
 
            setTours([...response.data])
            }
            )
            
            .catch(err => console.log(err));
        }, []);
  
        
  const updateSearch = e => {
    e.preventDefault();
    setQuery(e.target.value)
    console.log(query)
    const getTour = tours.filter(e =>
      e.location.toLowerCase().includes(query.toLowerCase())
      );
        setTours(getTour);
      }
  

  const getSearch = e => {
    e.preventDefault();
    setQuery(query)
    setSearch('');
    console.log(query)
  }

    return (
        <Wrapper>
            <form onSubmit={getSearch} className="searchWrapper" > 
                <input 
                className="searchBar" 
                type="text"
                text="Search" 
                value={query} 
                onChange={updateSearch}
                placeholder={placeholder}
                search={search}
                handleSubmit={getSearch}
                />
                
                <Link to={{
                  pathname: `/destinations/{query}`,
                  state: {
                    toursList: tours
                  }
                }}>
                  <i id="landing" className="fas fa-caret-left"></i><button type="submit"><i class="fas fa-search"></i></button>
                </Link>
                
                <div>
                </div>
            </form>  
            
     <Anime  easing="easeOutElastic" opacity={[0, 2]} translateY={'1em'}  delay={(e, i) => i * 2000}>
      {tours.map(tour => (
        <Tour 
       
          key={tour.id}
          title={tour.title} 
          location={tour.location}
          duration={tour.duration}
          guide={tour.guide}
          description={tour.description}
          query={query} 

        />
      ))}
      </Anime>
        </Wrapper>
    )
}
