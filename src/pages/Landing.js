import React from 'react'
import styled from 'styled-components';
import imgLanding from '../images/landing.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

const Landing = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
    z-index: -1;
    @media screen and (max-width:1000px){
        overflow-x: hidden; 
        overflow-y: auto;
        max-height: 100vh;
    }
    
`

const LeftSideTitle = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 100vh;
    letter-spacing: 2px;
    color: #fff;
    margin-left:0.5rem;
    z-index: 2;
    p {
        font-size: 1.5rem;
        width: 100%;
    }
    h1{
        font-size: 3rem;
        color: #fca311;
    }
    h2 {
        font-size: 2rem;
    }
     @media screen and (max-width:1000px){
    height: 100vh;
    align-items: flex-start;
    padding: 0rem;
        p {
    font-size: 1rem;
    width: 70%;
    }
    }
`

const RightSideImg = styled.div`
    height: 100vh;
    position:relative;
    img {
        height: 100%;
    }

    @media screen and (max-width:1024px){
        
        
    img {
        position: absolute;
        top: 0;
        right: -200px;
        
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
    @media screen and (max-width:1000px){
        
    }
`
function LandingMain() {
    return (
        <Landing>
            <LeftSideTitle>
                <div>
                    <h1>Hello,</h1>
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
