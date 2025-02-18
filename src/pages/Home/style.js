import styled from 'styled-components'


export const Container = styled.div`
    position: relative;
`


export const SectionOne = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .content{
        position: relative;
        width: 100%;
        height: 100vh;

        .image{
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            
            img{
                width: 450px;
            }
        }
        
        
    }

`


export const SectionTwo = styled.div`
    background: #F5F5DC;
    padding: 20px;
    color: #550000;
    
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
            
            small{
                    color: #550000;
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
            /* background:rgba(103, 23, 23, 0.44); */
            padding: 10px;
            border-radius: 10px;

            h3{
                color: #550000;
                letter-spacing: 15px;

            }

        }
`


export const SectionThree = styled.div`
    display: flex;

    .image{
        flex: 1
    }

    .text{
        flex: 1;

        h2{
            color: #550000;
            
        }
    }
`