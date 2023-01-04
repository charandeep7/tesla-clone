import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import logo from '../assets/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';


const Header = () => {
    const [toggle,setToggle] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);
    useEffect(() => {
        if (toggle) {
          document.body.style.overflowY = 'hidden';
        }else{
            document.body.style.overflowY = 'visible';
        }
      }, [toggle])

    return (
    <Container>
        <a>
            <img src={logo} alt="" />
        </a>

        <Menu>
            {cars && cars.map((car,index) => <a key={index} href='#'>{car}</a>)}
            <a href='#'>Solar Roof</a>
            <a href='#'>Solar Panels</a>
        </Menu>

        <RightMenu>
            <div>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
            </div>
            <CustomMenu onClick={() => setToggle(true)} />
        </RightMenu>

        <BurgerNav show={toggle}>
            <CloseWrapper> <CustomClose onClick={() => setToggle(false)} /> </CloseWrapper>
            {cars && cars.map((car,index) =><li key={index}><a href='#'>{car}</a></li>)}
            
            <li><a href='#'>Solar Roof</a></li>
            <li><a href='#'>Solar Panels</a></li>
            <li><a href='#'>Existing Inventory</a></li>
            <li><a href='#'>Used Inventory</a></li>
            <li><a href='#'>Trade-In</a></li>
            <li><a href='#'>Demo Drive</a></li>
            <li><a href='#'>Insurance</a></li>
            <li><a href='#'>Powerwall</a></li>
            <li><a href='#'>Commercial Energy</a></li>
            <li><a href='#'>Utilities</a></li>
            <li><a href='#'>Charging</a></li>
            <li><a href='#'>Find Us</a></li>
            <li><a href='#'>Support</a></li>
            <li><a href='#'>Investor Relations</a></li>
            <li><a href='#'>Shop</a></li>
            <li><a href='#'>Account</a></li>
        </BurgerNav>

        {
            toggle && <Overlay />
        }
    </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    a{
        margin-left: 10px;
    }
    img{
        cursor: pointer;
        margin-left: 10px;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 550;
        font-family: Arial, Helvetica, sans-serif;
        flex-wrap: no-wrap;
        padding: 0.8em;
        border-radius: 10px;
        transition: background ease-in-out 200ms;
    }

    a:hover{
        background: rgba(255,255,255,0.3);        
    }

    @media(max-width: 1200px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1em;
    a{
        font-weight: 550;
        font-family: Arial, Helvetica, sans-serif;
        flex-wrap: no-wrap;
        padding: 0.8em;
        border-radius: 10px;
        transition: background ease-in-out 200ms;
    }
    a:hover{
        background: rgba(255,255,255,0.3);        
    }
    div{
        @media(max-width: 1200px){
            display: none;
        }
    }
`

const CustomMenu = styled(MenuIcon)`
    margin-left: 10px;
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    width: 300px;
    overflow-x: hidden;
    z-index: 16;
    list-style: none;
    padding: 20px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    text-align: start;
    ::-webkit-scrollbar{
        width: 1px;
    }
    li{
        padding: 15px 0;

        a{
            width: 100%;
            font-weight: 600;
            padding: 1em;
        }

        a:hover{
            background: whitesmoke;
            opacity: 0.8;
        }
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(2px) opacity(95%);
    z-index: 9;
    overflow: hidden;
`