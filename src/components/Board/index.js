import React, { useState, useEffect } from 'react'
import { BoardContainer } from './style'
import Cell from '../Cell'
import chessPieceData from '../../chessPieceData'

const rows = [1, 2, 3, 4, 5, 6, 7, 8]
const cols = [1, 2, 3, 4, 5, 6, 7, 8]


const calculateGrid = () =>  {
    const grid = []

    for (let i = 0; i < rows.length; i++) {
        const rowNum = rows[i]
        for (let j = 0; j < cols.length; j++) {
            const colNum = cols[j]

            let cellData = {}
            cellData.row = rowNum
            cellData.col = colNum

            // Initializing ROOK
            const coordinates = `c${cellData.col}r${cellData.row}`

            if (chessPieceData.blackRook.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.blackRook.pieceData
            } 

            
            else if (chessPieceData.whiteRook.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.whiteRook.pieceData
            } 

            // Initializing PAWN
            else if (chessPieceData.blackPawn.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.blackPawn.pieceData
            } 

            else if (chessPieceData.whitePawn.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.whitePawn.pieceData
            } 

            else {
                cellData.chessPiece = {
                    chessPieceImg: null,
                    chessPieceName: null,
                    team: null,
                }
            }
            

            grid.push(cellData)
        }
    }
    
    return grid
}

function Board() {
    const [boardState, setBoardState] = useState([])
    const [movingPiece, setMovingPiece] = useState()
    const [isWhite, setIsWhite] = useState(true)

    useEffect(() => {
        setBoardState(calculateGrid())

    }, [])

    console.log(boardState)

    return (
        <>
            <BoardContainer>
                {boardState.map((cellData, index) => {
                return (
                <Cell 
                    setIsWhite={setIsWhite}
                    isWhite={isWhite}
                    setBoardState={setBoardState}
                    boardState={boardState} 
                    id={index} 
                    key={index} 
                    row={cellData.row} 
                    col={cellData.col} 
                    chessPiece={cellData.chessPiece}
                    setMovingPiece={setMovingPiece}
                    movingPiece={movingPiece}

                ></Cell>)
                })}
            </BoardContainer>
        </>
    )
}

export default Board