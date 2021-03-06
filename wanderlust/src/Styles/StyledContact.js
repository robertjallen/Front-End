import styled from 'styled-components';
import image from '../images/contact-img.jpg'

export const StyledContact = styled.div`
    

width: 100vw;
    height: 100vh;
    background-image: url(${image}); 


    h1{
        color: white;
        padding: 125px 0 0 0;
    }

    label{
        color: white;
    }

    img{
        width: 75%;
    }

        .contact-wrapper0{
            display: flex;
            flex-direction: column;
            width: 50%;
            justify-content: center;
            margin: auto;

            input {
                padding: 1%;
                margin: 2%;
            }

            button {
                width: 100px;
                margin: 2%;
                color:black;
                background-color: white;

                &:hover {
                    background-color: #3878b2;
                    color: white;
                }
            }

            ::nth-child(3){
                height: 300px;
            }
        }

`