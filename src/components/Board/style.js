import styled from "styled-components"

export const BoardContainer = styled.div`
    width: 800px;
    height: 800px;
    display: grid;
    grid-template-columns: repeat(8, 100px);
    grid-template-rows: repeat(8, 100px);
    border: 1px solid Black;
`