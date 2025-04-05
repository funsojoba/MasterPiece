import styled from 'styled-components'


export const Container = styled.div`
    position: relative;
`


export const SectionOne = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media only screen and (max-width:850px){
        height: 60vh;
    }

    .content{
        position: relative;
        width: 100%;
        height: 100vh;
        @media only screen and (max-width:850px){
            height: 80vh;
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
        
        
    }

`


export const SectionTwo = styled.div`
    color: #F5F5DC;
    padding: 20px;
    background: #550000;
    
    .timer{
        display: flex;
        gap: 10px;
        justify-content: center;
        
        &-child{
            background: #fff;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: 10px 10px 30px rgba(0,0,0,.3);
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            color: #550000;
            
            small{
                    color: #F5F5DC;
                    position: absolute;
                    bottom: -18px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }

        .date{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            padding: 10px;
            border-radius: 10px;

            h3{
                color: #F5F5DC;
                letter-spacing: 15px;
                
                @media only screen and (max-width:850px){
                    letter-spacing: 5px;
                    text-align: center;
                }

            }

        }
`


export const SectionThree = styled.div`
    display: flex;
    width: 100%;
    @media only screen and (max-width:850px){
        flex-direction: column;
        border-bottom: solid 1px #550000;
    }

    .image{
        width: 50%;
        @media only screen and (max-width:850px){
            width: 100%;
        }
        
        img{
            width: 100%;
        }
    }
    
    .text{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width:850px){
            width: 100%;
        }
        &-content{
            padding: 50px;

            h2{
                color: #550000;
                font-size: 4em;
            }
        }
    }
`

export const CoupleSection = styled.div`
    display: flex;
    background: #F5F5DC;

    @media only screen and (max-width:850px){
        flex-direction: column;
    }

    .image{
        padding: 50px;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        @media only screen and (max-width:850px){
            width: 100%;
        }
        
        &-content{
            width: 70%;
            @media only screen and (max-width:850px){
                width: 100%;
            }


            img{
                width: 100%;
                transform: perspective(1000px) rotateY(20deg);
            }
        }
    }
    .text{
        width: 50%;
        padding: 50px 50px 50px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width:850px){
            padding: 30px;
            width: 100%;
        }

        h2{
            font-size: 4em;
            @media only screen and (max-width:850px){
                font-size: 3em;
            }
            color: #550000;
        }
    }
`

export const Meet = styled.div`
    background: #000;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`

export const Story = styled.div`
    display: flex;
    background: #F5F5DC;
    @media only screen and (max-width:850px){
        flex-direction: column;
    }
    .text{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px;
        @media only screen and (max-width:850px){
            padding: 30px;
        }

        h2{
            font-size: 4em;
        }
    }

    .gallery{
        flex: 4;
        padding: 50px;
        @media only screen and (max-width:850px){
            padding: 30px;
        }
    }
`

export const Men = styled.div`
    padding: 30px;
    background: #550000;

    h2{
        color: #fff;
        text-align: center;
        
    }

`

export const Women = styled.div`
    background: #F5F5DC;
    padding: 30px;

    h2{
        color: #550000;
        text-align: center;
    }
`

export const Footer = styled.div`
    background: #000;
    color: #fff;
    padding: 30px;
`



export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
`;