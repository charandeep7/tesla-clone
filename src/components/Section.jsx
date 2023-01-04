import React from 'react'
import styled from 'styled-components'
import { Fade } from "react-awesome-reveal";

import DownArrowSVG from '../assets/DownArrowSVG.svg'

const Section = ({ title, description, backgroundImg, leftBtnText, rightBtnText, showDownArrow=false}) => {
  return (
    <Wrap bgimg={backgroundImg}>
        <Fade direction='up'>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>

        <Buttons>
            <Fade direction='up'>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText && 
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                {showDownArrow && 
                    <DownArrow src={DownArrowSVG} />
                }
            </Fade>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    height: 100vh;
    background: ${props => `url('${props.bgimg}')`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    width: 100vw;
    padding-top: 15vh;
    font-size: 20px;
    text-align: center;
    color: #000;
    letter-spacing: 0.1em;
    
    p{
        text-decoration: underline;
        cursor: pointer;
        opacity: 0.95;
    }
    p:hover{
        opacity: 1;
    }
    @media (max-width: 768px){
        font-size: 15px;
    }
`
const Buttons = styled.div`
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(23,26,32,0.9);
    height: 40px;
    width: 256px;
    margin: 8px;
    color: #fff;
    border-radius: 5px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background-color: rgba(255,255,255,0.8);
    color: #000;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`

