import gal_1 from "../../assets/gallery/bride.jpg"
import gal_2 from "../../assets/gallery/groom.jpg"
import gal_3 from "../../assets/gallery/cp.jpg"
import gal_4 from "../../assets/gallery/cp1.jpg"
import gal_5 from "../../assets/gallery/cp2.jpg"
import gal_6 from "../../assets/gallery/cp3.jpg"
import gal_7 from "../../assets/gallery/cp5.jpg"

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { Container } from "./style"



const Gallery = () => {
    return <Container>
            <div className="portrait">
                <div className="portrait-image">
                    <Zoom>
                        <img src={gal_1} alt="" />
                    </Zoom>
                </div>
                <div className="portrait-image">
                    <Zoom>
                        <img src={gal_3} alt="" />
                    </Zoom>
                </div>
                <div className="portrait-image">
                    <Zoom>
                        <img src={gal_2} alt="" />
                    </Zoom>
                </div>
            </div> 

            <div className="landscape">
                <div className="landscape-image">
                    <Zoom>
                        <img src={gal_4} alt="" />
                    </Zoom>
                </div>
                <div className="landscape-image">
                    <Zoom>
                        <img src={gal_5} alt="" />
                    </Zoom>
                </div>
                <div className="landscape-image">
                    <Zoom>
                        <img src={gal_6} alt="" />
                    </Zoom>
                </div>
                <div className="landscape-image">
                    <Zoom>
                        <img src={gal_7} alt="" />
                    </Zoom>
                </div>
            </div>       

    </Container>
}

export default Gallery