import React from 'react'
import styled from 'styled-components';
import imgLanding from '../images/landing.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

const Landing = styled.div`
    display:flex;
    background-color: #000;
    max-height: 100vh;
    @media screen and (max-width:1000px){
        overflow-x: hidden; 
        overflow-y: auto;
        max-height: 100vh;
    } 
`
const LeftSideTitle = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    letter-spacing: 1px;
    color: #fff;
    margin-left:3rem;
    .blinker {
        animation:blink 1s infinite linear;
    }
    p {
        font-size: 1.6rem;
        width: 100%;
    }
    h1{
        font-size: 3rem;
        color: #fca311;
    }
    h2 {
        font-size: 2rem;
    }
     @media screen and (max-width:1024px){
         z-index: 1;
        margin:1rem;
        width:80%;
        p {
    font-size: 1.2rem;
        }
    }
`
const RightSideImg = styled.div`
    height: 100vh;
    img {
        max-height: 100%;
    }
    @media screen and (max-width:1024px){
        z-index: 0;   
    img {
        position: absolute;
        height: 100vh;
        top: 0;
        right: -50%; 
    }
}
`
const Links = styled.div`
    height: 30%;
    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    a {
        text-decoration: none;
        color: #fff;
        }
    .icons {
        font-size: 2rem;
        width: 50%;
        display: flex;
        justify-content: space-evenly; 
        a {
            color:#fca311;
        }   
    }
`
function LandingMain() {
    return (
        <Landing>
            <LeftSideTitle>
                <div>
                    <h1>Hello<span className="blinker">,</span></h1>
                    <h2>I am Rafal</h2>
                </div>
                <p>Front-end developer based in London. This is just the beginning for me.
                    Simple, spacious designs and easy peasy lemon squeezy builds. That's what I do best.
                </p>
                <Links>
                    <h3> <Link to="/work">my work</Link></h3>
                    <div className="icons">
                        <a href="https://github.com/laterinthepast"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.instagram.com/lookmummyicancode/"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.linkedin.com/in/rafal-wrona/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                </Links>
            </LeftSideTitle>
            <RightSideImg>
                <img src={imgLanding} alt="landing" />
            </RightSideImg>
        </Landing>
    )
}

export default LandingMain
