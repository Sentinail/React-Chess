import React, { useState } from 'react'
import { CellContainer } from './style'
import chessPieceData from '../../chessPieceData'

const checkColor = (id, row) => {

    if (row % 2 !== 0 && id % 2 === 0) {
        return "Black"
    }

    else if ( row % 2 === 0 && id % 2 !== 0) {
        return "Black"
    }

    return "White"
}

const calculateMoveWithPiece = ( board, row, col, chessPiece ) => {
    let piecesPossibleMoves = {
        chessPieceName: chessPiece,
        moves: new Set([])
    }

    const remainingRightCells = 8 - col
    const remainingLeftCells = 8 - remainingRightCells - 1
    const remainingBottomCells = 8 - row
    const remainingTopCells = 8 - remainingBottomCells - 1
    
    if (chessPiece.chessPieceName === "ROOK") {

        for (let i = 1; i <= remainingRightCells; i++) {
            let checkCoordinateX = col + i
            let checkCoordinateY = row

            const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    break
                }
            } else {
                break
            }
        }

        for (let i = 1; i <= remainingLeftCells; i++) {
            let checkCoordinateX = col - i
            let checkCoordinateY = row

            const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    break
                }
            } else {
                break
            }
        }

        for (let i = 1; i <= remainingBottomCells; i++) {
            let checkCoordinateX = col
            let checkCoordinateY = row + i

            const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    break
                }
            } else {
                break
            }
        }

        for (let i = 1; i <= remainingTopCells; i++) {
            let checkCoordinateX = col
            let checkCoordinateY = row - i

            const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    break
                }
            } else {
                break
            }
        }
    }

    if (chessPiece.chessPieceName === "PAWN") {
        let step = 1
        const coordinate = `c${col}r${row}`
        const whitePawnStartingPlaces = chessPieceData.whitePawn.initialLocation
        const blackPawnStartingPlaces = chessPieceData.blackPawn.initialLocation

        if (chessPiece.team === "BLACK") {

            if (blackPawnStartingPlaces.has(coordinate)) {
                step = 2
            }

            for (let i = 1; i <= step; i++) {
                let checkCoordinateX = col
                let checkCoordinateY = row + i

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                } else {
                    break
                }
            }
        } else if (chessPiece.team === "WHITE") {

            if (whitePawnStartingPlaces.has(coordinate)) {
                step = 2
            }

            for (let i = 1; i <= step; i++) {
                let checkCoordinateX = col
                let checkCoordinateY = row - i

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                } else {
                    break
                }
            }
        }
    }

    return piecesPossibleMoves
}

function Cell({ id, row, col, chessPiece, boardState, setMovingPiece, movingPiece, setBoardState, isWhite, setIsWhite }) {

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
        
        // else {
        //     if (chessPiece.team === playerTurn) {
        //         if (movingPiece && (movingPiece.row === row && movingPiece.col === col)) {
        //             movingPiece.chessPieceName
        //             console.log(movingPiece)

        //             setMovingPiece()
        //         } else {
    
        //             const piecesPossibleMoves = calculateMoveWithPiece( boardState, row, col, chessPiece)
        //             piecesPossibleMoves.row = row
        //             piecesPossibleMoves.col = col
        //             setMovingPiece(piecesPossibleMoves)
        //         }
        //     }
        // }

        
    }

    const getColor = () => {
        if (movingPiece && movingPiece.moves.has(`c${col}r${row}`)) {
            return "Green"
        } else {
            return checkColor(id + 1, row)
        }
    }

    return (
        <>
            <CellContainer id={`c${col}r${row}`} $backgroundColor={() => {return getColor()}} onClick={handleClick}>
                <p> { col }|{ row } </p>
                <p> {chessPiece.chessPieceName} </p>
                <p> { chessPiece.team } </p>
            </CellContainer>
        </>
    )
}

export default Cell