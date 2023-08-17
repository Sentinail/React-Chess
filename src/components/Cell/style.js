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

    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }
`