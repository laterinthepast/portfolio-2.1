import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: yellow;
    border-radius: 0 0 20px 20px;
    display: flex;
    height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .icons {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        padding: 1rem;
        a {
            margin: 1rem;
            text-decoration: none;
            color: #000;
        }
    }
    @media screen and (max-width:1000px){
        height: 20vh;
        bottom: 0;
        border-radius: 0;
        width: 100%;
        align-items: center;
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
            <p>
                lookmummy@gmail.com
            </p>
            <div className="icons">
                <a href="https://github.com/laterinthepast"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.instagram.com/lookmummyicancode/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
        </Footer>
    )
}

export default Contact