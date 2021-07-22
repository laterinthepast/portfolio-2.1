import React from 'react'
import styled from 'styled-components';
import imgLanding from '../images/landing.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

const Landing = styled.div`
    display:flex;
    background-color: #000;
    height: 100vh;
    background-image: url("${imgLanding}");
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: right;
    
    
    
    @media screen and (max-width:1000px){
    background-size:cover;
    background-position:25%;
    } 
`
const LeftSideTitle = styled.div`
    animation: fadein 2.2s, 1s ease-out 0s 1 slideInFromLeft ;
    /* animation: ; */
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    letter-spacing: 1px;
    color: #fff;
    margin-left:3rem;
    width: 50%;
    .blinker {
        /* animation:blink 1s infinite linear; */
    }
    
    p {
        font-size: 1.6rem;
        width: 100%;
        /* animation: fadein 4.2s, 2s ease-out 0s 1 slideInFromLeft ; */
        
    }
    h1{
        font-size: 3rem;
        color: #fca311;
    }
    h1,h2 {
        /* animation: fadein 4.2s, 5s ease-out 0s 1 slideInFromTop ; */
    }
    h2 {
        font-size: 2rem;
    }
     @media screen and (max-width:1024px){
        6
        margin:1rem;
        width:75%;
        p {
    font-size: 1.2rem;
        }
    }
`
/* const RightSideImg = styled.div`
    height: 100vh;
    background-image: url('../images/landing.jpg');
    
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
` */
const Links = styled.div`
    height: 30%;
    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* animation: fadein 4.2s, 3s ease-out 0s 1 slideInFromBottom ; */
    h3 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1rem;
        border-radius: 50px;
        padding: 5px;
        transition: 0.2s ease-in-out;
        letter-spacing: 4px;
        background-color: #fff;
        
        box-shadow: 0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #fca311,
        0 0 82px #fca311,
        0 0 92px #fca311,
        0 0 102px #fca311,
        0 0 151px #fca311; ;
        
        :hover{
        animation:  shake 0.5s;
        }
    }
    a {
        text-decoration: none;
        color: #000;
        
        }
    .icons {
        font-size: 2rem;
        width: 100%;
        display: flex;
        justify-content: space-evenly; 
        a {
            color:#fca311;
            :hover {
                transform: scale(1.1);
            }
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
                <p className="fadeIn">Front-end developer based in London. This is just the beginning for me.
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
            {/* <RightSideImg>
                <img src={imgLanding} alt="landing" />
            </RightSideImg> */}
        </Landing>
    )
}

export default LandingMain
