import React from 'react'
import styled from 'styled-components'

import { Section, Footer } from './'

import {model3, modelS, modelX, modelY, solarPanel, solarRoof, accessories} from '../assets/index'

const Home = () => {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Schedule a Demo Drive"
            backgroundImg={modelS}
            leftBtnText="Buy Now"
            rightBtnText="Custom Order"
            showDownArrow="true"
            />
        <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg={modelY}
            leftBtnText="Buy Now"
            rightBtnText="Custom Order"
        />
        <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg={model3}
            leftBtnText="Buy Now"
            rightBtnText="Custom Order"
        />
        <Section 
            title="Model X"
            description="Schedule a Demo Drive"
            backgroundImg={modelX}
            leftBtnText="Buy Now"
            rightBtnText="Custom Order"
        />
        <Section 
            title="Solar Panels"
            description="Lowest Cost Solar Panels in America"
            backgroundImg={solarPanel}
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section 
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            backgroundImg={solarRoof}
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section 
            title="Accessories"
            description=""
            backgroundImg={accessories}
            leftBtnText="Shop Now"
            rightBtnText=""
        />
        <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`