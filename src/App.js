import React, { useContext } from 'react'
import Board from './components/Board'  
import { GlobalStyle } from './globalStyle'
import { styleContext } from './context/styleContext'
import { BoardBorder } from './components/Board/style'

function App() {
    const { primaryColor, tertiaryColor } = useContext(styleContext)

    return (
        
        <>
            <GlobalStyle $tertiaryColor={tertiaryColor} />
            <BoardBorder $primaryColor={primaryColor}>
             <Board />
            </BoardBorder>
        </>
    )
}

export default App