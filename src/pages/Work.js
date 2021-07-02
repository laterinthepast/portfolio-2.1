import React from 'react'
import styled from 'styled-components';
import Page from '../components/Page';
import img1 from '../images/7.jpg'
import img2 from '../images/6.jpg'
import img3 from '../images/ey.jpg'
import img4 from '../images/10.jpg'
import Contact from '../components/Contact';

const Wrapper = styled.div`
    margin-top: 100px;
    max-width:100%;
    background-color: #000 ;
    color: #fff;
`
const PageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); 
    @media screen and (max-width:1000px){
       display: flex;
       flex-wrap: wrap;    
    }
`
function WorkSection() {
    return (
        <Wrapper>
            <PageContainer>
                <Page
                    src={img1}
                    title="Na Ha Ku"
                    path="https://60c889031eb7b00008a27487--agitated-pare-e17700.netlify.app/"
                    Git="https://github.com/laterinthepast/na_haku"
                    Link="https://60c889031eb7b00008a27487--agitated-pare-e17700.netlify.app/"
                    description="Design, build and management of the website. Future development will involve converting it into e-commerce platform with its own shop for all the arts and crafts. Website built with React and Sass using styled components. Work in progress"
                />
                <Page
                    src={img2}
                    title="Mellerdramatic"
                    path="https://mellerdramatic.netlify.app/"
                    Git="https://github.com/laterinthepast/bry-react"
                    Link="https://mellerdramatic.netlify.app/"
                    description="One of the first projects built with React. Design, build and management of the website. Website will be updated with new designs and tattoo photos. Future development may involve adding a shop for selling Bry's artwork and possibility for NFTs. Website built with React and Sass using styled components."
                />
                <Page
                    src={img3}
                    title="Quartz"
                    path="https://cocky-northcutt-9c570f.netlify.app/"
                    Git="https://github.com/laterinthepast/quartz-website"
                    Link="https://cocky-northcutt-9c570f.netlify.app/"
                    description="Simple landing website for a local business. Design, build and management. Currently awaiting client update. Work in progress"
                />
                <Page
                    src={img4}
                    title="Cryptofolio"
                    path="https://github.com/laterinthepast/cryptofolio"
                    Git="https://github.com/laterinthepast/cryptofolio"
                    Link="https://github.com/laterinthepast/cryptofolio"
                    description="Cryptofolio is my latest project. Cryptocurrencies wallet with charts and all the necesarry info about your fauvorites coins. Will be built on React with Node.js... work in progress"
                />
            </PageContainer>
            <Contact />
        </Wrapper>
    )
}

export default WorkSection;