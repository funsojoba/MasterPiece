
import { useState, useEffect } from "react"
import { 
        SectionOne, Container, 
        SectionTwo, SectionThree, 
        CoupleSection, Meet, Story, 
        Men, Women, Image } from "./style"

import Masonry from "react-masonry-css";


// import { FC, useCallback, useRef, } from 'react';
// import LightGallery from 'lightgallery/react';
// import lgZoom from 'lightgallery/plugins/zoom';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
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

// import FUNSO_IMG from "../../assets/MEN/funso.jpg"
import FUNSO_IMG_2 from "../../assets/MEN/funso_2.jpg"
import SAKA_IMG from "../../assets/MEN/saka.jpg"
import TOMIWA_IMG from "../../assets/MEN/tomiwa.jpg"
import TOBI_IMG from "../../assets/MEN/tobi.jpg"
import FAMOUS_IMG from "../../assets/MEN/famous.jpg"
import AYOBAMI from "../../assets/MEN/ayobami.jpg"
import DAMILOLA from "../../assets/MEN/damilola.jpg"
import MARK from "../../assets/MEN/mark.jpg"
import ERIC from "../../assets/MEN/eric.jpg"
import AYOOLA from "../../assets/MEN/ayoola.jpg"
import SUNDAY from "../../assets/MEN/sunday.jpg"
import DANIEL from "../../assets/MEN/agbaje.jpg"
import KINGIE from "../../assets/MEN/king-david.jpg"


// women
import ESTHER_IMG from "../../assets/WOMEN/esther.jpg"
import NIFEMI from "../../assets/WOMEN/nifemi.jpg"
import IBUKUN from "../../assets/WOMEN/ibukun.jpg"
import ESTHER_ADETOLA from "../../assets/WOMEN/train.jpg"
import TITILAYO from "../../assets/WOMEN/titilayo.jpg"
import PRAISE from "../../assets/WOMEN/praise.jpg"
import YETUNDE from "../../assets/WOMEN/yetunde.jpg"
import GIFT from "../../assets/WOMEN/gift.jpg"
import VIVIAN from "../../assets/WOMEN/vivian.jpg"
import DAMILOLA_IMG from "../../assets/WOMEN/adejumoke.jpg"





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
            image: ERIC,
            name: "Eric Olakanye ",
            title: "C.E.O",
            social: "@eric_kanye_"
        },
        {
            image: MARK,
            name: "Mark Diji",
            title: "Legal Practitioner",
            social: "@Mark_diji"
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
            image: FAMOUS_IMG,
            name: "Famous Paul",
            title: "Yahoo Boy",
            social: "@famouspaul"
        },
        {
            image: SAKA_IMG,
            name: "Olayinka Saka",
            title: "Business Process Analyst",
            social: "@sakaolayinka20"
        },
        {
            image: DAMILOLA,
            name: "Olaoluwa Damilola",
            title: "Construction project manager ",
            social: "@dhamie_laolu"
        },
        {
            image: KINGIE,
            name: "OlaoKingDavid Ayo-Loto",
            title: "Digital Creator and Marketing Executive  ",
            social: "@_kingie_"
        },
        {
            image: AYOBAMI,
            name: "Ajayi Daniels Ayobami",
            title: "Missiologist",
            social: "@danielsayobami"
        },
        {
            image: DANIEL,
            name: "Daniel Agbaje",
            title: "Business Development manager",
            social: "@daniel_agbaje"
        },
        {
            image: FUNSO_IMG_2,
            name: "Folorunso Elujoba",
            title: "Software Engineer",
            social: "@funsojoba"
        },
        {
            image: SUNDAY,
            name: "Sunday Samuel",
            title: "Field Sales Manager",
            social: "@Sammyyooh"
        },
        {
            image: AYOOLA,
            name: "Abraham Ayoola",
            title: "Product Designer",
            social: "@haybe_dammy"
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
            image: DAMILOLA_IMG,
            name: "Oluwadamilola Adeyinka",
            title: "",
            social: "@dammyy___"
        },
        {
            image: GIFT,
            name: "Gift Komilogbon",
            title: "Founder",
            social: "@gift Komilogbon"
        },
        {
            image: NIFEMI,
            name: "Oluwanifemi Olaobaju",
            title: "Financial Control Personnel",
            social: "@_oluwanifemi_"
        },
        {
            image: VIVIAN,
            name: "Ekeh Vivian Chinaza",
            title: "Product design",
            social: "@thevivianekeh"
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


    // const dynamicEl = [
    //     {
    //         src: BRIDD_IMG,
    //         responsive: true,
    //         thumb: '...',
    //         subHtml: "Pelumi"
    //     },
    //     {
    //         src: GROOM_IMG,
    //         responsive: true,
    //         subHtml: 'Oluwatobi'
    //     },
    // ];

    // const imagesGalary = [
    //     "https://via.placeholder.com/600x400",
    //     "https://via.placeholder.com/400x600",
    //     "https://via.placeholder.com/600x600",
    //     "https://via.placeholder.com/800x500",
    //     "https://via.placeholder.com/500x700",
    //   ];
      
      const breakpoints = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
      };

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
                <Masonry breakpointCols={breakpoints} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {images.map((src, index) => (
                    <Image key={index} src={src} alt={`Gallery Image ${index}`} />
                    ))}
                    </Masonry>
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