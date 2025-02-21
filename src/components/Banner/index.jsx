import styled from "styled-components";


const BannerDiv = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`



const Banner = ({background}) => {
    return (
        <BannerDiv background={background}>
            <h1>MasterPiece</h1>
        </BannerDiv>
    );
}

export default Banner;