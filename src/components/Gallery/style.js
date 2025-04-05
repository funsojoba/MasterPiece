import styled from "styled-components";



export const Container = styled.div`
    width: 100%;

    .portrait{
        display: flex;
        &-image{
            width: 33.33%;

            img{
                width: 100%;
            }
        }
    }

    .landscape{
        display: flex;
        flex-wrap: wrap;

        .landscape-image{
            width: 50%;
            img{
                width: 100%;
            }
        }
    }
`