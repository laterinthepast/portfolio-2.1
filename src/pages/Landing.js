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
    padding-left: 0.5rem;
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
    width: 50%;
    .blinker {
        animation: blink 1s infinite;
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
        margin: 0;
        width:85%;
        justify-content: flex-start;
        p {
    font-size: 1.2rem;
        }
        h2 {
            padding-bottom: 2.5rem;
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
