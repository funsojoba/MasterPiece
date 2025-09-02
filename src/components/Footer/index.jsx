import { FooterDiv } from "./style";
import { Link } from "react-router";
import LOGO from "../../assets/logo.png"


const Footer = () => {
    return <FooterDiv>
        <div className="date">
            <div className="date-content">
                <h2 className="montserrat-regular">SEPT. 13<sup>th</sup>, 2025</h2>
                {/* <Link to="/schedule#map">
                    God&apos;s Love Tabernacle International Church Camp Ground, Ijebu Ode Road, Idi Ayunre, Ibadan, Oyo State, Nigeria
                </Link>
                <p className="montserrat-regular">
                </p> */}
            </div>
        </div>

        <div className="info">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/story">STORY</Link>
                <Link to="/schedule">SCHEDULE</Link>
            </div>
            <div className="buttons">
                <Link to="/gift" >Send us a gift</Link>
                <Link>RSVP Here</Link>
            </div>
        </div>

        <div className="logo">
            <div className="logo-image">
                <img src={LOGO} alt="MasterPiece" />
            </div>
        </div>
    </FooterDiv>
}

export default Footer