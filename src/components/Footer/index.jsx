import { FooterDiv } from "./style";
import { Link } from "react-router";
import LOGO from "../../assets/logo.png"


const Footer = () => {
    return <FooterDiv>
        <div className="date">
            <div className="date-content">
                <h2 className="montserrat-regular">SEPT. 13th, 2025</h2>
                <p className="montserrat-regular">Somewhere in Ibadan sha, you will get the address if you are invited, if not, mind your business</p>
            </div>
        </div>

        <div className="info">
            <div className="links">
                <Link>About</Link>
                <Link>About</Link>
                <Link>About</Link>
            </div>
            <div className="buttons">
                <Link>Send us a gift</Link>
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