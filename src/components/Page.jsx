import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
   
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    
    .footer_icons{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        font-size: 50px;
        padding-bottom: 2rem;
        
        a {
        text-decoration: none;
        color: #000;    
        text-align: center;
        }
        
    }
`
const Heading = styled.div`
    text-align: center;
    padding: 1.2rem;
    font-size:2rem;
    color: #e63946;
`
const ImgSection = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
        width: 500px;
        box-shadow: rgba(149, 157, 165, 0.2) 10px 10px 50px;
        text-align: center;
    }

`
const Info = styled.div`
    padding:2rem;

    p {
        font-size: 1.2rem;
        line-height: 3rem;
    }
`

function Page(props) {
    return (
        <Wrapper>
            <Heading>
                <h1>{props.title}</h1>
            </Heading>
            <ImgSection>
                <a href={props.path}>
                    <img src={props.src} alt="project"></img>
                </a>
                <Info>
                    <p>{props.description}</p>
                </Info>
            </ImgSection>
            <div className="footer_icons">
                <a href={props.Git}><FontAwesomeIcon icon={faGithub} /></a>
                <a href={props.Link} ><FontAwesomeIcon icon={faLink} /></a>
            </div>
        </Wrapper>)
}

export default Page;