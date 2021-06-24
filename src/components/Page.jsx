import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


const Wrapper = styled.div`
    
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    .footer_icons{
        display: flex;
        justify-content: space-evenly;
        align-items:flex-end;
        font-size: 50px;
        padding-bottom: 1rem;
        a {
        text-decoration: none;
        color: #000;    
        
        }
        
    }
    @media screen and (max-width:1000px) {
        box-shadow: none;
        width: 100%;
    }
    
`
const Heading = styled.div`
    text-align: center;
    padding: 1.2rem;
    font-size:2rem;
    color: #14213d;
    @media screen and (max-width:1000px) {
    font-size: 1rem;
    }
`
const ImgSection = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
        width: 500px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 10px 29px 0px;
        text-align: center;
    }
    @media screen and (max-width:1000px) {
        img {
            width: 100%;
    }
}

`
const Info = styled.div`
    padding:2rem;

    p {
        font-size: 1.2rem;
        line-height: 3rem;
        font-family: 'Oswald', sans-serif;
        font-weight: 600;
    }
    @media screen and (max-width:1000px) {
        padding: 1rem;
        
        p {
            font-size: 1rem;
           line-height: 2rem; 
        }
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