import styled from "styled-components";


export const SectionOne = styled.div`
    font-family: "Montserrat", serif;
    background: #F5F5DC;
    padding: 50px;

    p{
        text-align: center;
        text-decoration: underline;
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
                font-size: 3em;

                @media only screen and (max-width:850px){
                    font-size: 2em;
                }
            }
        }
    }


`

export const SectionTwo = styled.div`
    font-family: "Montserrat", serif;
    background: #fff;
    padding: 50px;

    p{
        text-align: center;
        text-decoration: underline;
    }
    
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        
        .sec-one{
            padding: 50px;
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

    
            h2{
                font-size: 3em;
            }
        }
    }
`


export const Map = styled.div`
    width: 100vw;
    height: 70vh;

    iframe{
        width: 100%;
        height: 100%;
        border: none;
    }
`
