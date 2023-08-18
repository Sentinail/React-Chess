import styled from "styled-components"

export const BoardContainer = styled.div`
    width: auto;
    height: auto;
    display: grid;
    aspect-ratio: 1/1;
    grid-template-columns: repeat(8, 100px);
    grid-template-rows: repeat(8, 100px);

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(8, 80px);
        grid-template-rows: repeat(8, 80px);
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: repeat(8, 60px);
        grid-template-rows: repeat(8, 60px);
    }

    @media screen and (max-width: 550px) {
        grid-template-columns: repeat(8, 50px);
        grid-template-rows: repeat(8, 50px);
    }

    @media screen and (max-width: 420px) {
        grid-template-columns: repeat(8, 40px);
        grid-template-rows: repeat(8, 40px);
    }
`

export const BoardBorder = styled.div`
    border: 5px solid ${props => {return props.$primaryColor + "ab"}};
    border-radius: 5px;
    box-shadow: 0px 0px 20px 10px rgba(0,0,0,0.5);
`