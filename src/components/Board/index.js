import React, { useState, useEffect, useContext } from 'react'
import { BoardContainer } from './style'
import Cell from '../Cell'
import chessPieceData from '../../chessPieceData'
import { styleContext } from '../../context/styleContext'

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


            // Initializing HORSE
            else if (chessPieceData.blackHorse.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.blackHorse.pieceData
            }

            else if (chessPieceData.whiteHorse.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.whiteHorse.pieceData
            }

            // Initializing BISHOPS
            else if (chessPieceData.blackBishop.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.blackBishop.pieceData
            }

            else if (chessPieceData.whiteBishop.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.whiteBishop.pieceData
            }

            // Initializing QUEEN
            else if (chessPieceData.blackQueen.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.blackQueen.pieceData
            }

            else if (chessPieceData.whiteQueen.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.whiteQueen.pieceData
            }

            // Initializing KING

            else if (chessPieceData.blackKing.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.blackKing.pieceData
            }

            else if (chessPieceData.whiteKing.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.whiteKing.pieceData
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
    const { setTertiaryColor } = useContext(styleContext)

    useEffect(() => {
        setBoardState(calculateGrid())

    }, [])

    useEffect(() => {
        isWhite ? setTertiaryColor("#323B54") : setTertiaryColor("#335742")
        
    }, [isWhite])

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