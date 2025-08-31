import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import Banner from "../../components/Banner";
import BG_ONE from "../../assets/BGS/2.jpg";

import { SectionOne, SectionTwo } from "./style";

import IMAGE_1 from "../../assets/story/image_1.png"
import IMAGE_2 from "../../assets/story/INTRO.jpg"
import IMAGE_3 from "../../assets/story/image_3.jpg"
import IMAGE_4 from "../../assets/story/image_4.jpg"
import IMAGE_5 from "../../assets/story/image_5.jpg"
import IMAGE_6 from "../../assets/story/image_6.jpg"
import IMAGE_7 from "../../assets/story/image_7.jpg"




const Story = () => {

    return (
        <div>
        <NavBar />
        <Banner background={BG_ONE} />
        <SectionOne background="#c68f61">
            <div className="image">
                <img src={IMAGE_2} alt="" />
            </div>
            <div className="content">
                <div className="text">
                    <h1>How did you meet?</h1>
                    <p>
                        <b>PELUMI:</b> We have always seen each other in church and at work, but our first meeting was at a work hangout.
                    </p>
                    <br></br>
                    <p>
                        <b>TOBI:</b> We met at work and our first real conversation was at a staff hangout; precisely 4th September, 2023 
                    </p>
                </div>
            </div>
        </SectionOne>

        <SectionTwo background="#d2bcc8">
            <div className="content">
                <div className="text">
                    <h1>What was your first impression of each other?</h1>
                    <p>
                        <b>PELUMI: </b>I was very indifferent about him.....I had no impression whatsoever.
                    </p>
                    <br/>
                    <p>
                        <b>TOBI:</b> Well, I didn&apos;t like her at first. I had an impression that was not good. But jokes on me now sha
                    </p>
                </div>
            </div>

            <div className="image">
                <img src={IMAGE_3} alt="" />
            </div>
        </SectionTwo>
        
        <SectionOne background="#ca9970">
            <div className="image">
                <img src={IMAGE_4} alt="" />
            </div>
            <div className="content">
                <div className="text">
                    <h1>What was your first date like?</h1>
                    <p>
                        <b>PELUMI:</b> It was very chilled, a casual and friendly pizza date. 
                    </p>
                    <br></br>
                    <p>
                        <b>TOBI:</b> Hmmmmm, we went on a “casual” date as “friends”. We ate pizza and she swapped the drink that she ordered because she preferred mine to hers (who ordered for you aunty… lol)
                    </p>
                </div>
            </div>
        </SectionOne>

        <SectionTwo background="#d8c4c5">
            <div className="content">
                <div className="text">
                    <h1>What is your partner&apos;s favorite movie genre?</h1>
                    <p>
                        <b>PELUMI: </b>Action (precisely intelligence)
                    </p>
                    <br/>
                    <p>
                        <b>TOBI:</b> Sci-fi
                    </p>
                </div>
            </div>

            <div className="image">
                <img src={IMAGE_6} alt="" />
            </div>
        </SectionTwo>

        <SectionOne background="#bea297">
            <div className="image">
                <img src={IMAGE_5} alt="" />
            </div>
            <div className="content">
                <div className="text">
                    <h1>What is your favorite activity to do together?</h1>
                    <p>
                        <b>PELUMI:</b> watching movies and praying. 
                    </p>
                    <br></br>
                    <p>
                        <b>TOBI:</b> Spending quality time together, seeing a movie together, times we pray together also
                    </p>
                </div>
            </div>
        </SectionOne>

        <SectionTwo background="#c58f61">
            <div className="content">
                <div className="text">
                    <h1>What do you love most about each other?</h1>
                    <p>
                        <b>PELUMI: </b> love his bubbly personality. It is gradually rubbing off on me. 
                    </p>
                    <br/>
                    <p>
                        <b>TOBI:</b> A couple of things actually, and I don&apos;t know how to rank them. 
                        She is unbelievable on the inside. Her growth, I love the way she is gentle, 
                        I love the way she loves the Lord, plus she is very intelligent and resourceful. 
                        Overall, I love being her best friend.

                    </p>
                </div>
            </div>

            <div className="image">
                <img src={IMAGE_7} alt="" />
            </div>
        </SectionTwo>

         <SectionOne color="#000">
            <div className="image">
                <img src={IMAGE_1} alt="" />
            </div>
            <div className="content">
                <div className="text">
                    <h1>What do you look forward to in the marriage?</h1>
                    <p>
                        <b>PELUMI:</b> I look forward to building a legacy with him. fulfilling purpose by the help of God.
                    </p>
                    <br></br>
                    <p>
                        <b>TOBI:</b> I have heard of a marriage that is SWEETER THAN HONEY; I am looking forward to having a premium experience of it by the grace of God, fulfilling destiny with the woman of my dreams
                    </p>
                </div>
            </div>
        </SectionOne>


        <Footer />
        </div>
    );
}

export default Story;