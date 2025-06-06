import { useState } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import Banner from "../../components/Banner";
import BG_ONE from "../../assets/BGS/3.jpg";
import { Link } from "react-router";

import { SectionOne, TopLevel, BankLogo, Button } from "./style";

import VALE_LOGO from "../../assets/vale_bank.png"
import FIRST_BANK from "../../assets/first_bank.png"



const Gift = () => {
    // Import useState and useRef for copy functionality

    const copyToClipboard = (text, setCopied) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    const [copiedFirst, setCopiedFirst] = useState(false);
    const [copiedVale, setCopiedVale] = useState(false);

    return (
        <div>
            <NavBar />
            <Banner background={BG_ONE} />
            <TopLevel>
                <div className="content">
                    <h1 className="montserrat-regular">Gifts</h1>
                    <p className="montserrat-regular">
                        Your presence at our wedding is the greatest gift of all. 
                        However, if you wish to bless us with a gift, we have created a registry to help guide your generosity.
                    </p>
                </div>
            </TopLevel>

            <SectionOne>
                <p><strong>Monetary Gift</strong> <br /> Nigerian bank accounts you can send them to</p>
                <div className="content">

                    <div className="sec-one">
                        <BankLogo background={FIRST_BANK} />
                        <h2>FIRST BANK OF NIGERIA</h2>
                        <h4
                            style={{ cursor: "pointer", userSelect: "all" }}
                            onClick={() => copyToClipboard("3077338634", setCopiedFirst)}
                            title="Click to copy"
                        >
                            3077338634 {copiedFirst && <span style={{ color: "green", fontSize: 14 }}>Copied!</span>}
                        </h4>
                        <h2>ADEGBILE OLUWATOBILOBA EMMANUEL</h2>
                    </div>

                    <div className="sec-one">
                        <BankLogo background={VALE_LOGO} />
                        <h2>VALE BANK</h2>
                        <h4
                            style={{ cursor: "pointer", userSelect: "all" }}
                            onClick={() => copyToClipboard("1010359983", setCopiedVale)}
                            title="Click to copy"
                        >
                            1010359983 {copiedVale && <span style={{ color: "green", fontSize: 14 }}>Copied!</span>}
                        </h4>
                        <h2>AJAGBE OLUWAPELUMI VICTORIA</h2>
                    </div>
                </div>

            </SectionOne>

            <TopLevel>
                <div className="content">
                    <h1 className="montserrat-regular">RESERVE A GIFT TO BUY</h1>
                    <p className="montserrat-regular">
                        You can reserve a gift to buy for us by clicking on the link blow
                    </p>
                    <Button>
                        <Link
                            className="montserrat-regular"
                            to="https://www.thingstogetme.com/1697982a2f165" 
                            target="_blank">CLICK HERE</Link>
                    </Button>


                </div>
            </TopLevel>
            <Footer />
        </div>
    );
}


export default Gift;