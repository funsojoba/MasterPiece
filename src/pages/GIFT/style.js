import styled from "styled-components";


export const TopLevel = styled.div`
    padding: 50px;
    text-align: center;
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .content{
        width: 50%;

        @media only screen and (max-width:750px){
            width: 90%;
        }
    }
`

export const BankLogo = styled.div`
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    background-image: url(${props => props.background});
`


export const SectionOne = styled.div`
    font-family: "Montserrat", serif;
    background: #F5F5DC;
    padding: 50px;

    p{
        text-align: center;
        @media only screen and (max-width:850px){
            text-align: left;
            
        }

    }
    
    .content{
        display: flex;

        @media only screen and (max-width:850px){
            flex-direction: column;
        }
        
        .sec-one{
            padding: 50px;
            flex:1;
            
            &:not(:last-child){
                border-right: solid 1px #000;
            }

            @media only screen and (max-width:850px){
                padding: 20px 0;
                &:first-child{
                    border-bottom: solid 1px #000;
                    border-right: none;
                }

                &:last-child{
                    border-right: none;
                    border-bottom: none;
                }

            }

    
            h2{
                font-size: 1.5em;

                @media only screen and (max-width:850px){
                    font-size: 1em;
                }
            }

            h4{
                font-size: 2em;

                @media only screen and (max-width:850px){
                    font-size: 1.5em;
                }
            }
        }
    }


`

export const SectionTwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .content{

    }
`

export const Button = styled.div`
    margin-top: 15px;
    a{
        display: inline-block;
        padding: 15px 20px;
        border-radius: 10px;
        text-decoration: none;
        cursor: pointer;
        color: #fff;
        background: #550000;
    }
`