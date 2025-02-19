
import { useState, useEffect } from "react"
import { SectionOne, Container, SectionTwo, SectionThree, CoupleSection, Meet, Story } from "./style"

import logo from "../../assets/logo.png"
import NavBar from "../../components/Navbar"
import Footer from "../../components/Footer"

import BG_ONE from "../../assets/BGS/1.jpg"
import BG_TWO from "../../assets/BGS/2.jpg"
import BG_THREE from "../../assets/BGS/3.jpg"
import BG_FOUR from "../../assets/BGS/4.jpg"
import BG_FIVE from "../../assets/BGS/5.jpg"

import BRIDD_IMG from "../../assets/bride.jpg"
import GROOM_IMG from "../../assets/groom.jpg"
import COUPLE_IMG from "../../assets/couple.jpg"







const Home = () =>{
    const [backgroundImg, setBackgroundImg] = useState(BG_ONE)
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const targetDate = new Date("September 13, 2025 00:00:00").getTime();

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);


    const images = [
        BG_ONE,
        BG_TWO,
        BG_THREE,
        BG_FOUR,
        BG_FIVE
    ];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setBackgroundImg(images[index]);
            index = (index + 1) % images.length;
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Container>
            <NavBar/>

            <SectionOne backgroundImage={backgroundImg}>
                <div className="content">
                    <div className="image">
                        <img src={logo} />
                    </div>

                </div>
            </SectionOne>
            <SectionTwo>
                    <div className="timer">
                        <div className="timer-child montserrat-regular" id="days">
                            {days}
                            <small>Days</small>
                        </div>
                        <div className="timer-child montserrat-regular" id="hours">
                            {hours}
                            <small>Hours</small>
                        </div>
                        <div className="timer-child montserrat-regular" id="minutes">
                            {minutes}
                            <small>Min.</small>
                        </div>
                        <div className="timer-child montserrat-regular" id="seconds">
                            {seconds}
                            <small>Sec.</small>
                        </div>
                    </div>

                    <div className="date montserrat-regular">
                        <h3>Sept. 13th, 2025</h3>
                    </div>
            </SectionTwo>

            <CoupleSection>
                <div className="image">
                    <div className="image-content">
                        <img src={COUPLE_IMG} alt="couple" />
                    </div>
                </div>
                <div className="text">
                    <div className="text-content">
                        <h2 className="allison-regular">Message From the Couple</h2>
                        <p className="montserrat-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, provident voluptatem quas accusantium molestias voluptatum ratione ipsam dicta quo quod perspiciatis similique rem quisquam facilis consectetur voluptatibus dolor nemo vel!</p>
                    </div>
                </div>
            </CoupleSection>

            <Meet>
                <h2 className="montserrat-regular">Meet the Couple</h2>
            </Meet>

            <SectionThree>
                <div className="image">
                    <img src={BRIDD_IMG} alt="bride image" />
                </div>

                <div className="text">
                    <div className="text-content">
                        <h2 className="allison-regular">About the Bride</h2>
                        <p className="montserrat-regular">Pelumi is a Chattered accountant, and an exceptional young woman who aims to change the world by impacting it positively.</p>
                    </div>
                </div>
            </SectionThree>
            
            <SectionThree>
                <div className="text">
                    <div className="text-content">
                        <h2 className="allison-regular">About the Bride</h2>
                        <p className="montserrat-regular">Tobi is a nice guy, I honestly don’t know what he does, he sha comes and goes, but he’s a good boy so no panic</p>
                    </div>
                </div>

                <div className="image">
                    <img src={GROOM_IMG} alt="groom image" />
                </div>

            </SectionThree>

            <Story>
                <div className="text">
                    <h2 className="allison-regular">Our Story</h2>
                </div>
                <div className="gallery">

                </div>
            </Story>

        <Footer />
        </Container>
    )
}

export default Home