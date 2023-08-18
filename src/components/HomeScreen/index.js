import React, { useContext } from 'react'
import { PlayButton, StartScreenContainer } from './style'
import { styleContext } from '../../context/styleContext'
import startBoardSFX from "../../assets/SFX/board-start.mp3"

function Home({ setIsPlaying }) {
    const {primaryColor, secondaryColor} = useContext(styleContext)

    const handleClick = () => {
        setIsPlaying(true)
        new Audio(startBoardSFX).play()
    }

  return (
    <StartScreenContainer>
        <PlayButton onClick={handleClick} $primaryColor={primaryColor} $secondaryColor={secondaryColor}>
            <h1> Play Chess! </h1>
        </PlayButton>
    </StartScreenContainer>
  )
}

export default Home