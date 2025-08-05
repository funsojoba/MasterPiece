
import { useState, useEffect } from "react"
import { 
        SectionOne, Container, 
        SectionTwo, SectionThree, 
        CoupleSection, Meet, Story, 
        Men, Women } from "./style"

import 'react-medium-image-zoom/dist/styles.css'

import Gallery from "../../components/Gallery"


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
import IFETOBI from "../../assets/MEN/ifetobi.jpg"
import BARNABAS from "../../assets/MEN/BARNABAS.jpg"


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
import OKIKI from "../../assets/WOMEN/okiki.jpg"


`
    TODO

    RSVP
    Content for the couple

    Schedule
`


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
            image: IFETOBI,
            name: "Ifetobi Olaniyan",
            title: "Music Producer (Rev Music)",
            social: "@eife.tobi",
            is_best_man: true
        },
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
            title: "Software Engineer",
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
            image: BARNABAS,
            name: "Barnabas Okunlola",
            title: "Content Manager",
            social: "@hishael",
        },
        {
            image: KINGIE,
            name: "KingDavid Ayo-Loto",
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
            image: ESTHER_ADETOLA,
            name: "Fabiyi Esther Adetola",
            title: "Virtual Assistant ",
            social: "@entioluwayan",
            is_best_woman: true
        },
        {
            image: YETUNDE,
            name: "Oni Ayomide",
            title: "Registered Nurse",
            social: "@theglobalmide"
        },
        {
            image: ESTHER_IMG,
            name: "Esther Akintayo",
            title: "Finance coach",
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
            image: OKIKI,
            name: "Okiki Ajala",
            title: "Corporate Comms Specialist",
            social: "@okiki_ajala",
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
    ]

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
                        <h2 className="allison-regular">Welcome To Rehoboth</h2>

                        <p className="montserrat-regular">
                         And he removed from thence, and digged another well; and for that they strove not: 
                         and he called the name of it <strong>REHOBOTH</strong>; and he said, For now the LORD hath 
                         made room for us, and we shall be fruitful in the land.
                        <br/>
                         <br/>
                         <strong><em>Genesis 26:22 [KJV]</em></strong>
                         <br/>
                         <br/>
                         <em>#thisisrehoboth</em>
                        </p>
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
                        <p className="montserrat-regular">
                            Oluwapelumi is a skilled clinical Embryologist and a highly capable executive and administrative support professional. 
                            What truly defines her, however, is her deep and abiding love for God. 
                            This guiding principle brings a beautiful warmth and sincerity to her life, 
                            influencing everything she does and making her a joy to be around.
                        </p>
                    </div>
                </div>
            </SectionThree>
            
            <SectionThree>
                <div className="text">
                    <div className="text-content">
                        <h2 className="allison-regular">About the Groom</h2>
                        <p className="montserrat-regular">
                            Tobi is a proficient Christian Creative and passionate lover of God, called to minister through worship. 
                            He serves as a minstrel with a heart for God&apos;s presence. 
                            A trained geographer and the third of three children. 
                            Beyond music &amp; media, Tobi is skilled in leadership and project management, 
                            bringing vision and structure to every assignment.
                        </p>
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
                    <Gallery />
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