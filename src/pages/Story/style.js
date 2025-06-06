import styled from "styled-components";






export const SectionOne = styled.div`
    width: 100%;
    padding: 50px;
    background: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat", serif;

    @media only screen and (max-width:1100px){
        h1{
            font-size: 1.5em;
            margin-bottom: 10px;
        }
        flex-direction: column;
    }


    .content{
        flex: 1;
        display: flex;
        justify-content: flex-start;

        .text{
            width: 60%;

            @media only screen and (max-width:790px){
                width: 100%;
            }
        }
    }

    .image{
        flex: 1;
        display: flex;
        justify-content: flex-end;

        img{
            width: 400px;
        }
    }

    `


// background: #F5F5DC;
export const SectionTwo = styled.div`
    width: 100%;
    padding: 50px;
    background: #F5F5DC;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat", serif;

    @media only screen and (max-width:1100px){
        flex-direction: column;
        
        h1{
            font-size: 1.5em;
            margin-bottom: 10px;
        }
    }

    @media only screen and (max-width:1100px){
        flex-direction: column-reverse;
    }


    .content{
        flex: 1;
        display: flex;
        justify-content: flex-end;

        .text{
            width: 60%;

            @media only screen and (max-width:790px){
                width: 100%;
            }
        }
    }

    .image{
        flex: 1;

        img{
            width: 400px;
        }
    }
`


export const Image = styled.img`
    width: 100%;`


export const Imagecontainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;`