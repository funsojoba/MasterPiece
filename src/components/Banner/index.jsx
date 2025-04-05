import styled from "styled-components";
// import PropTypes from 'prop-types';

import logo from "../../assets/logo.png"


const BannerDiv = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;

    @media only screen and (max-width:850px){
        height: 60vh;
    }


    .image{
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 450px;
            
            @media only screen and (max-width:850px){
                width: 250px;
            }
            
            img{
                width: 100%;
            }
        }
`



const Banner = ({background}) => {
    return (
        <BannerDiv background={background}>
            <div className="image">
                <img src={logo} />
            </div>
        </BannerDiv>
    );
}


export default Banner;
