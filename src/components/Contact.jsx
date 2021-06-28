import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Footer = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fca311;
    width: 100%;
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
    text-align: center;
    .goback {
        position: fixed;
        left:50px;
        font-size: 3rem;
        color: #000;
        @media screen and (max-width:1000px){
            font-size: 2rem;
            top:38px;
        }
    }
    .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        a {
            margin: 1rem;
            text-decoration: none;
            color: #000;
        }
    }
    @media screen and (max-width:1000px){
        border-radius: 0 0 100px 100px;
        display: flex;
        flex-direction: column;
        .icons {
            padding: 0;
            a {
                margin: 0.5rem;
            }
        }
    }

`
function Contact() {
    return (
        <Footer>
            <a href="/" className="goback"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <p>lookmummy@gmail.com</p>
            <div className="icons">
                <a href="https://github.com/laterinthepast"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.instagram.com/lookmummyicancode/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/in/rafal-wrona/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </Footer>
    )
}

export default Contact