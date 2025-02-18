import styled from "styled-components"
import Logo from "../../assets/logo.png"

import { Link } from "react-router"



const NavBarStyle = styled.div`
    
    background: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    
    img{
        width: 50px;
    }
    
    .links{
        display: flex;
        gap: 10px;
        font-family: 'montserrat' sans-serif;
    }
`




const NavBar = ()=>{
    return <NavBarStyle>
        <Link to="#">
            <img src={Logo} />
        </Link>

        <div className="links">
            <Link>About </Link>
            <Link>About </Link>
            <Link>About </Link>
            <Link>About </Link>
        </div>
    </NavBarStyle>
}


export default NavBar