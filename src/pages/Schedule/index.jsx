import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";

import Banner from "../../components/Banner";

import BG_ONE from "../../assets/BGS/1.jpg"


import {SectionOne, SectionTwo, Map} from "./style";





const Schedule = () => {
  return (
    <div>
        <NavBar />
        <Banner background={BG_ONE} />
        <SectionOne>
            <p><strong>Saturday</strong> <br /> 13th September, 2025</p>
            <div className="content">

                <div className="sec-one">
                    <h2>Traditional <br/> Wedding</h2>
                    <h4>8:00am</h4>
                </div>
                <div className="sec-one">
                    <h2>Church Joining </h2>
                    <h4>11:00am</h4>
                </div>
            </div>

        </SectionOne>

        <SectionTwo>
            <p><strong>Saturday</strong> <br></br> 13th September, 2025</p>
            <div className="content">
                <div className="sec-one">
                    <h4>Reception follows immediately</h4>
                </div>
            </div>
        </SectionTwo>

        {/* <Map id="map">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6849725938046!2d3.865058374581059!3d7.276641292730492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398f17970eb341%3A0x50c9dc383c19e88!2sGLT%20CAMP%20GROUND!5e0!3m2!1sen!2sng!4v1740163543479!5m2!1sen!2sng" 
                allowfullscreen="" 
                loading="lazy" 
                >

                </iframe>
        </Map> */}
        <Footer />
    </div>
  );
}


export default Schedule;