
import { useState, useEffect } from "react"
import { 
        SectionOne, Container, 
        SectionTwo, SectionThree, 
        CoupleSection, Meet, Story, 
        Men, Women } from "./style"

import { FC, useCallback, useRef, } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import { LightGallery as ILightGallery } from 'lightgallery/lightgallery';


import logo from "../../assets/logo.png"
import NavBar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ScrollableCards from "../../components/ScrollCard"

import BG_ONE from "../../assets/BGS/1.jpg"
import BG_TWO from "../../assets/BGS/2.jpg"
import BG_THREE from "../../assets/BGS/3.jpg"
import BG_FOUR from "../../assets/BGS/4.jpg"
import BG_FIVE from "../../assets/BGS/5.jpg"

import BRIDD_IMG from "../../assets/bride.jpg"
import GROOM_IMG from "../../assets/groom.jpg"
import COUPLE_IMG from "../../assets/couple.jpg"

import FUNSO_IMG from "../../assets/MEN/funso.jpg"
import SAKA_IMG from "../../assets/MEN/saka.jpg"
import TOMIWA_IMG from "../../assets/MEN/tomiwa.jpg"
import TOBI_IMG from "../../assets/MEN/tobi.jpg"


// women
import ESTHER_IMG from "../../assets/WOMEN/esther.jpg"
import NIFEMI from "../../assets/WOMEN/nifemi.jpg"
import IBUKUN from "../../assets/WOMEN/ibukun.jpg"
import ESTHER_ADETOLA from "../../assets/WOMEN/esther_adetola.jpg"
import TITILAYO from "../../assets/WOMEN/titilayo.jpg"
import PRAISE from "../../assets/WOMEN/praise.jpg"
import YETUNDE from "../../assets/WOMEN/yetunde.jpg"





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

    const mensCard = [
        {
            image: SAKA_IMG,
            name: "Olayinka Saka",
            title: "Business Process Analyst",
            social: "@sakaolayinka20"
        },
        {
            image: TOMIWA_IMG,
            name: "Tomiwa Ajiboye",
            title: "Legal Associate",
            social: "@thetomiwajiboye"
        },
        {
            image: TOBI_IMG,
            name: "Tobi Kolawole",
            title: "Lead Photographer",
            social: "@the_tobikolawole"
        },
        {
            image: FUNSO_IMG,
            name: "Famous Paul",
            title: "Software Engineer",
            social: "@famouspaul"
        },
        {
            image: FUNSO_IMG,
            name: "Folorunso Elujoba",
            title: "Software Engineer",
            social: "@funsojoba"
        },
        {
            image: FUNSO_IMG,
            name: "Folorunso Elujoba",
            title: "Software Engineer",
            social: "@funsojoba"
        },
    ]

    const womensCard = [
        {
            image: ESTHER_IMG,
            name: "Esther Akintayo",
            title: "Territory Manager",
            social: "@theestherakintayo"
        },
        {
            image: NIFEMI,
            name: "Oluwanifemi Olaobaju",
            title: "Financial Control Personnel",
            social: "@_oluwanifemi_"
        },
        {
            image: IBUKUN,
            name: "Deborah Ibukun",
            title: "Real estate consultant",
            social: "@IBK homes "
        },
        {
            image: ESTHER_ADETOLA,
            name: "Fabiyi Esther Adetola",
            title: "Virtual Assistant ",
            social: "@entioluwayan"
        },
        {
            image: TITILAYO,
            name: "Titilayo Obadara",
            title: "Scrum Master/ IT Prog Manager",
            social: "@titi_obadara"
        },
        {
            image: PRAISE,
            name: "Akinyoola Praise",
            title: "",
            social: "@tehillah_omofunmilola"
        },
        {
            image: YETUNDE,
            name: "Oni Ayomide",
            title: "Registered Nurse",
            social: "@theglobalmide"
        },
    ]


    const dynamicEl = [
        {
            src: BRIDD_IMG,
            responsive: true,
            thumb: '...',
            subHtml: "Pelumi"
        },
        {
            src: GROOM_IMG,
            responsive: true,
            subHtml: 'Oluwatobi'
        },
    ];


    return (
        <Container>
            <NavBar/>

            <SectionOne background={backgroundImg}>
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
                        <p className="montserrat-regular">We&apos;re excited to share our special day with you! Please RSVP to let us know if you&apos;ll be attending in person, so we can reserve a seat, or join virtually, in which case we&apos;ll send you a link. We&apos;ll share additional details as they become available.</p>
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
                    <LightGallery
                        dynamic={true}
                        dynamicEl={dynamicEl}
                    />
                </div>
            </Story>

            <Men>
                <h2 className="montserrat-bold">Meet the Groom&apos;s Men</h2>
                <ScrollableCards cards={mensCard}/>
            </Men>

            <Women>
                <h2 className="montserrat-bold">Meet the Bride&apos;s Maids</h2>
                <ScrollableCards cards={womensCard}/>
            </Women>


        <Footer />
        </Container>
    )
}

export default Home