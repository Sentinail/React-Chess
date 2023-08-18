import React, { useContext } from 'react'
import { Animation, CellContainer, ChessImage, MoveColorLayer } from './style'
import { checkColor } from '../../algorithms/checkingColor' 
import { calculateMoveWithPiece } from '../../algorithms/piecePossibleMoves'
import { styleContext } from '../../context/styleContext'
import moveSFX from "../../assets/SFX/move-self.mp3"
import attackSFX from "../../assets/SFX/attack-opponent.mp3"
import { motion, AnimatePresence } from 'framer-motion'

function Cell({ id, row, col, chessPiece, boardState, setMovingPiece, movingPiece, setBoardState, isWhite, setIsWhite }) {
    const { primaryColor, secondaryColor, tertiaryColor } = useContext(styleContext)

    const handleClick = () => {
        const playerTurn = isWhite ? "WHITE" : "BLACK"

        if (movingPiece && movingPiece.moves.has(`c${col}r${row}`)) {
            let hasAttacked = false

            let newBoardState = boardState.map((cell, index) => {

                // Replaces the piece that moved to that location
                if (cell.row === row && cell.col === col) {

                    if (cell.chessPiece.chessPieceName) {
                        hasAttacked = true
                    }

                    let newCell = cell
                    let chessPiece = movingPiece.chessPieceName

                    newCell.row = cell.row
                    newCell.col = cell.col
                    newCell.chessPiece = chessPiece
                    return newCell
                } 

                // Deletes the piece that moved
                else if (cell.row === movingPiece.row && cell.col === movingPiece.col) {
                    let newCell = cell
                    newCell.row = cell.row
                    newCell.col = cell.col
                    newCell.chessPiece = {
                        chessPieceImg: null,
                        chessPieceName: null,
                        team: null,
                    }
                    return newCell

                } else {
                    return cell
                }
            })
            
            setBoardState(newBoardState)
            setIsWhite(!isWhite)
            setMovingPiece()
            if (hasAttacked) {
                new Audio(attackSFX).play()
            } else {
                new Audio(moveSFX).play()
            }
            
        } 
        
        if (chessPiece.chessPieceName) {
            if (movingPiece && (movingPiece.row === row && movingPiece.col === col)) {
                setMovingPiece()
            }

            else if (chessPiece.team === playerTurn) {
                const piecesPossibleMoves = calculateMoveWithPiece( boardState, row, col, chessPiece)
                piecesPossibleMoves.row = row
                piecesPossibleMoves.col = col
                setMovingPiece(piecesPossibleMoves)
            }
        } else {
            setMovingPiece()
        }
    }

    const getColor = () => {
        return checkColor(id + 1, row, primaryColor, secondaryColor)
    }

    return (
        <>
            <motion.div initial={{opacity: 0, y: -100 }} animate={{opacity: 1, y: 0}}>
                <CellContainer id={`c${col}r${row}`} $backgroundColor={() => {return getColor()}} onClick={handleClick}>
                    { (movingPiece && movingPiece.moves.has(`c${col}r${row}`)) && <MoveColorLayer $tertiaryColor={tertiaryColor}/> }
                    
                    <AnimatePresence>
                    { chessPiece.chessPieceImg ? 
                        <motion.div initial={{opacity: 0, y: -100 }} animate={{opacity: 1, y: 0}}>
                            <ChessImage src={chessPiece.chessPieceImg} alt='chessPiece' />
                        </motion.div>
                    : 
                        <div> 
                            {/* <p> { col }|{ row } </p>
                            <p> {chessPiece.chessPieceName} </p>
                            <p> { chessPiece.team } </p> */}
                        </div> }

                    </AnimatePresence>
                    
                </CellContainer>
            </motion.div>
        </>
    )
}

export default Cell