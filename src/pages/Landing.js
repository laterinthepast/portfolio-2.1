import React from 'react'
import styled from 'styled-components';
import imgLanding from '../images/landing.jpg'


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
        
        margin:1rem;
        width:75%;
        p {
    font-size: 1.2rem;
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
            </LeftSideTitle>
        </Landing>
    )
}

export default LandingMain
