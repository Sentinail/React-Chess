import React, { useContext } from 'react'
import { Animation, CellContainer, MoveColorLayer } from './style'
import { checkColor } from '../../algorithms/checkingColor' 
import { calculateMoveWithPiece } from '../../algorithms/piecePossibleMoves'
import { styleContext } from '../../context/styleContext'

function Cell({ id, row, col, chessPiece, boardState, setMovingPiece, movingPiece, setBoardState, isWhite, setIsWhite }) {
    const { primaryColor, secondaryColor, tertiaryColor } = useContext(styleContext)

    const handleClick = () => {
        const playerTurn = isWhite ? "WHITE" : "BLACK"

        if (movingPiece && movingPiece.moves.has(`c${col}r${row}`)) {
            let newBoardState = boardState.map((cell, index) => {

                if (cell.row === row && cell.col === col) {
                    let newCell = cell
                    let chessPiece = movingPiece.chessPieceName

                    newCell.row = cell.row
                    newCell.col = cell.col
                    newCell.chessPiece = chessPiece
                    return newCell
                } 

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
            <CellContainer id={`c${col}r${row}`} $backgroundColor={() => {return getColor()}} onClick={handleClick}>
                { (movingPiece && movingPiece.moves.has(`c${col}r${row}`)) && <MoveColorLayer $tertiaryColor={tertiaryColor}/> }
                
                <Animation>
                    <p> { col }|{ row } </p>
                    <p> {chessPiece.chessPieceName} </p>
                    <p> { chessPiece.team } </p>
                </Animation>
                    
                
            </CellContainer>
        </>
    )
}

export default Cell