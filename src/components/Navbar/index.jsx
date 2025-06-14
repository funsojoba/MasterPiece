import { useState } from "react"
import styled from "styled-components"
import Logo from "../../assets/logo.png"

import { Link } from "react-router"

import { FaBars } from "react-icons/fa"


export const Bordered = styled.div`
    a{
        background-color: #8d6c93;
    }
 `

const NavBarStyle = styled.div`
    
    background: rgba(0,0,0,.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 5px 20px;
    z-index: 10;

    @media only screen and (max-width:850px){
        position: sticky;
        top: 0;
    }
    
    img{
        width: 90px;
    }
    
    .links{
        display: flex;
        gap: 10px;

        @media only screen and (max-width:850px){
            flex-direction: column;
            position: absolute;
            top:55px;
            right:0;
            background: rgba(0,0,0,.6);
            padding: 15px;
            display: ${props => props.display || 'none'};
        }
        
        a{
            font-family: "Montserrat", serif;
            text-decoration: none;
            color: #fff;
            padding: 5px 8px;
            display: inline-block;
            border: solid 1px #fff;
            transition: all 300ms ease-in;

            &:hover{
                transform: scale(1.2);
                box-shadow: 3px 7px 30px rgba(0,0,0,.6);
            }

        }
    }

    .hambugger{
        font-size: 2em;
        color: #fff;
        z-index: 15;
        cursor: pointer;
        display: none;

        @media only screen and (max-width:850px){
            display: block;
        }
    }
`




const NavBar = ()=>{
    const [display, setDisplay] = useState(false)

    const handleSetDisplay = () =>{
        return setDisplay(!display)
    }

    return <NavBarStyle display={display}>
        <Link to="/">
            <img src={Logo} />
        </Link>

        <div className="links">
            <Link to="/">Home </Link>
            <Link>RSVP </Link>
            <Link to="/story">STORY </Link>
            <Link to="/schedule">SCHEDULE </Link>
            <Bordered>
                <Link to="/gift">SEND A GIFT </Link>
            </Bordered>
        </div>
        <div className="hambugger">
            <FaBars onClick={handleSetDisplay}/>
        </div>
    </NavBarStyle>
}


export default NavBar