import { styled } from "styled-components";

export const StartScreenContainer = styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`   

export const PlayButton = styled.div`
    width: 200px;
    height: 100px;
    background-color: ${props => {return props.$primaryColor}};
    border: 3px solid ${props => {return props.$secondaryColor}};
    border-radius: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        scale: 1.1;
    }

    transition: all 0.2s ease-in-out;
`