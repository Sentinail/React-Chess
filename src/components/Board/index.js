import React, { useState, useEffect, useContext } from 'react'
import { BoardContainer } from './style'
import Cell from '../Cell'
import chessPieceData from '../../chessPieceData'
import { styleContext } from '../../context/styleContext'


import blackRook from "../../assets/Images/Black-Rook.png";
import blackKnight from "../../assets/Images/Black-Knight.png";
import blackBishop from "../../assets/Images/Black-Bishop.png";
import blackQueen from "../../assets/Images/Black-Queen.png";
import blackKing from "../../assets/Images/Black-King.png";
import blackPawn from "../../assets/Images/Black-Pawn.png";

import whiteRook from "../../assets/Images/White-Rook.png";
import whiteKnight from "../../assets/Images/White-Knight.png";
import whiteBishop from "../../assets/Images/White-Bishop.png";
import whiteQueen from "../../assets/Images/White-Queen.png";
import whiteKing from "../../assets/Images/White-King.png";
import whitePawn from "../../assets/Images/White-Pawn.png";

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
                cellData.chessPiece.chessPieceImg = blackRook
            } 

            else if (chessPieceData.whiteRook.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.whiteRook.pieceData
                cellData.chessPiece.chessPieceImg = whiteRook
            } 


            // Initializing HORSE
            else if (chessPieceData.blackHorse.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.blackHorse.pieceData
                cellData.chessPiece.chessPieceImg = blackKnight
            }

            else if (chessPieceData.whiteHorse.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.whiteHorse.pieceData
                cellData.chessPiece.chessPieceImg = whiteKnight
            }

            // Initializing BISHOPS
            else if (chessPieceData.blackBishop.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.blackBishop.pieceData
                cellData.chessPiece.chessPieceImg = blackBishop
            }

            else if (chessPieceData.whiteBishop.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.whiteBishop.pieceData
                cellData.chessPiece.chessPieceImg = whiteBishop
            }

            // Initializing QUEEN
            else if (chessPieceData.blackQueen.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.blackQueen.pieceData
                cellData.chessPiece.chessPieceImg = blackQueen
            }

            else if (chessPieceData.whiteQueen.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.whiteQueen.pieceData
                cellData.chessPiece.chessPieceImg = whiteQueen
            }

            // Initializing KING

            else if (chessPieceData.blackKing.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.blackKing.pieceData
                cellData.chessPiece.chessPieceImg = blackKing
            }

            else if (chessPieceData.whiteKing.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.whiteKing.pieceData
                cellData.chessPiece.chessPieceImg = whiteKing
            }
            
            
            // Initializing PAWN
            else if (chessPieceData.blackPawn.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.blackPawn.pieceData
                cellData.chessPiece.chessPieceImg = blackPawn
            } 

            else if (chessPieceData.whitePawn.initialLocation.has(coordinates)) {
                cellData.chessPiece = chessPieceData.whitePawn.pieceData
                cellData.chessPiece.chessPieceImg = whitePawn
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