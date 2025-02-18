
import { useState, useEffect } from "react"
import { SectionOne, Container, SectionTwo, SectionThree } from "./style"

import logo from "../../assets/logo.png"
import NavBar from "../../components/Navbar"

import BG_ONE from "../../assets/BGS/1.jpg"
import BG_TWO from "../../assets/BGS/2.jpg"
import BG_THREE from "../../assets/BGS/3.jpg"
import BG_FOUR from "../../assets/BGS/4.jpg"
import BG_FIVE from "../../assets/BGS/5.jpg"




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

            <SectionThree>
                <div className="image">

                </div>
                <div className="text">
                    
                </div>
            </SectionThree>

        </Container>
    )
}

export default Home