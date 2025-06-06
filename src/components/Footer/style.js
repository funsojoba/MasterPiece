import styled from "styled-components";



export const FooterDiv = styled.div`
    padding: 20px;
    background: #550000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    a{
        text-decoration: none;
        color: #fff;
        display: inline-block;
        padding: 10px 15px;
        font-family: "Montserrat", serif;

        &:hover{
            text-decoration: underline;
        }
    }

    @media only screen and (max-width:850px){
        flex-direction: column;
        text-align: left;
    }

    .date{
        flex: 1;
        &-content{
            width: 80%;
            margin: auto;
            color: #fff;

            h2{
                padding: 10px 15px;
            }
        }
    }

    .info{
        flex: 1;
        @media only screen and (max-width:850px){
            justify-content: center;
            text-align: left;
            margin-top: 20px;
        }
        

        .buttons a{
            text-decoration: none;
            color: #fff;
            display: inline-block;
            padding: 10px 15px;
            font-family: "Montserrat", serif;
            background: #F5F5DC;
            margin: 5px;
            color: #550000;
        }
    }

    .logo{
        &-image{
            width: 200px;

            img{
                width: 100%;
            }
        }
    }
`