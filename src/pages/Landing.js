import React from 'react'
import styled from 'styled-components';
import imgLanding from '../images/landing.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";


const LeftSideTitle = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 60vh;
    letter-spacing: 2px;
    color: #fff;
    width: 40%;
    p {
        font-size: 1.5rem;
        width: 100%;
    }
    h1{
        font-size: 3rem;
        color: red;
    }
    h2 {
        font-size: 2rem;
    }
    @media screen and (max-width:1000px){
        height: 100vh;
        width: 100vw;
        align-items: flex-start;
        padding: 2rem;
        p {
        font-size: 1rem;
        width: 70%;
    }
    overflow-x: hidden; 
    overflow-y: auto;
    }
`
const Landing = styled.div`
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
    display:flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
    
    position:relative;
    @media screen and (max-width:1000px){
        flex-wrap: wrap;
        z-index: 999;
    }
`

const RightSideImg = styled.div`
    height: 100vh;
    img {
        height: 100%;
    }

@media screen and (max-width:1000px){
    position: fixed;
    margin-right: -400px ;
    height: 100vh;
    width: 100%;
    z-index: -1;
}
`

const Links = styled.div`
    height: 30%;
    width:100%;
    display: flex;
    justify-content: space-evenly;
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
    }
    @media screen and (max-width:1000px){
        height: 10%;
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
                <p>I am a front-end developer based in London. This is just the beginning for me.
                    Simple spacious designs and easy peasy lemon squeezy builds that's what I do best.
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
                <img src={imgLanding} alt="" />
            </RightSideImg>
        </Landing>

    )

}

export default LandingMain
