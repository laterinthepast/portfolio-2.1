import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


const Wrapper = styled.div`
    border-radius:20px;
    margin: 2rem;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    .footer_icons{
        display: flex;
        justify-content: space-evenly;
        align-items:flex-end;
        font-size: 50px;
        padding-bottom: 1rem;
        a {
            text-decoration: none;
            color: #fff;    
        }
    }
    @media screen and (max-width:1000px) {
        box-shadow: none;
        width: 100%;
        margin: 0;
    } 
`
const Heading = styled.div`
    
    text-align: center;
    padding: 1.2rem;
    font-size:1.3rem;
    color: #f48c06;
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
        width: 100%;
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
            <Heading><h1>{props.title}</h1></Heading>
            <ImgSection>
                <a href={props.path}><img src={props.src} alt="project"></img></a>
                <Info><p>{props.description}</p></Info>
            </ImgSection>
            <div className="footer_icons">
                <a href={props.Git}><FontAwesomeIcon icon={faGithub} /></a>
                <a href={props.Link} ><FontAwesomeIcon icon={faLink} /></a>
            </div>
        </Wrapper>)
}

export default Page;