import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <a href='#'>Tesla © {new Date().getFullYear()}</a>
        <a>Privacy & Legal</a>
        <a>Vehicle Recalls</a>
        <a className='mobile'>Contact</a>
        <a>Careers</a>
        <a>News</a>
        <a className='mobile'>Engage</a>
        <a className='mobile'>Locations</a>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
    font-size: 15px;
    font-weight: bold;
    a{
        margin: 0 10px;
        cursor: pointer;
    }

    @media(max-width: 610px){
        flex-direction: column;
        a{
            margin: 5px 0;
        }
        .mobile{
            display: none;
        }
    }
`