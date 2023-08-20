import styled from "styled-components"

export const CellContainer = styled.div`
    & * {
        padding: 0;
        margin: 0;
    }
    width: 100%;
    height: 100%;
    background-color: ${props => {return props.$backgroundColor}};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: orange;
    box-shadow: 0px 0px 20px 10px rgba(0,0,0,0.5) inset;

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    position: relative;
`

export const MoveColorLayer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => {return props.$tertiaryColor}};
    opacity: 0.7;
    z-index: 5;
    box-shadow: 0px 0px 20px 25px rgba(0,0,0,1) inset;
    position: absolute;
    top: 0;
    left: 0;
`

export const Animation = styled.div`
    animation: fade 0.5s ease-in-out;

    @keyframes fade {
        0% {opacity: 0}
        100% {opacity: 1}
    }
`
export const ChessImage = styled.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    z-index: 10;
`