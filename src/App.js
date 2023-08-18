import React, { useContext, useState } from 'react'
import Board from './components/Board'  
import { GlobalStyle } from './globalStyle'
import { styleContext } from './context/styleContext'
import { BoardBorder } from './components/Board/style'
import Home from './components/HomeScreen'

function App() {
    const { primaryColor, tertiaryColor } = useContext(styleContext)
    const [isPlaying, setIsPlaying] = useState(false) 

    return (
        
        <>
            <GlobalStyle $tertiaryColor={tertiaryColor} />
            { isPlaying ?
                <BoardBorder $primaryColor={primaryColor}>
                    <Board />
                </BoardBorder>
                :

                <Home setIsPlaying={setIsPlaying}/>
            }
            <></>
        </>
    )
}

export default App