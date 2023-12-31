import React, { useState, useEffect, useContext, useLayoutEffect } from 'react'
import { BoardContainer, WinnerAlertBox } from './style'
import Cell from '../Cell'
import chessPieceData from '../../chessPieceData'
import { styleContext } from '../../context/styleContext'
import { calculateDangerKing, calculateMoveWithPiece } from '../../algorithms/piecePossibleMoves'
import { motion } from 'framer-motion'
import startBoardSFX from "../../assets/SFX/board-start.mp3"

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
let set = new Set([])

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
    const { setTertiaryColor, primaryColor, secondaryColor, tertiaryColor } = useContext(styleContext)
    const [boardState, setBoardState] = useState([])
    const [movingPiece, setMovingPiece] = useState()
    const [isWhite, setIsWhite] = useState(true)
    const [ dangerCellsForWhite, setDangerCellsForWhite ] = useState()
    const [ dangerCellsForBlack, setDangerCellsForBlack ] = useState()
    const [ isWinnerData, setIsWinnerData ] = useState()

    useLayoutEffect(() => {
        setBoardState(calculateGrid())
        window.localStorage.setItem("history", JSON.stringify([]))
    }, [])

    useEffect(() => {
        isWhite ? setTertiaryColor("#323B54") : setTertiaryColor("#335742")
    }, [isWhite])

    useEffect(() => {
        let currentState = [...boardState]
        const history = JSON.parse(window.localStorage.getItem("history"))

        if (currentState.length > 0) {
            history.push(currentState)
            window.localStorage.setItem("history", JSON.stringify(history))
        }


        let dangerCellsForWhiteKing = new Set([])
        let dangerCellsForBlackKing = new Set([])

        // Calculating The "Danger" Cells Per Move 
        for (let i = 0; i < boardState.length; i++) {
            const cell = boardState[i]

            if (cell.chessPiece.chessPieceName) {
                if (cell.chessPiece.team === "WHITE") {
                    const possibleMoves = calculateDangerKing(boardState, cell.row, cell.col, cell.chessPiece)
                    const movesArray = Array.from(possibleMoves.moves)

                    for (let j = 0; j < movesArray.length; j++) {
                        const move = movesArray[j]
                        dangerCellsForBlackKing.add(move)
                    }
                } 
                
                else if (cell.chessPiece.team === "BLACK") {
                    const possibleMoves = calculateDangerKing(boardState, cell.row, cell.col, cell.chessPiece)
                    const movesArray = Array.from(possibleMoves.moves)

                    for (let j = 0; j < movesArray.length; j++) {
                        const move = movesArray[j]
                        dangerCellsForWhiteKing.add(move)
                    }
                }
            }
        }

        // Checking if there is a mate
        for (let i = 0; i < boardState.length; i++) {
            const cell = boardState[i]
2
            if (cell.chessPiece.chessPieceName === "KING") {
                if (cell.chessPiece.team === "BLACK") {
                    // If Checked
                    if (dangerCellsForBlackKing.has(`c${cell.col}r${cell.row}`)) {
                        let history = JSON.parse(window.localStorage.getItem("history"))

                        if (isWhite) {
                            history.pop()
                            setBoardState(history[history.length - 1])
                            window.localStorage.setItem("history", JSON.stringify(history))
                            setIsWhite(false)
                        }

                        // If No Possible Moves
                        else if (calculateMoveWithPiece(boardState, cell.row, cell.col, cell.chessPiece, dangerCellsForWhiteKing, dangerCellsForBlackKing).moves.size <= 0) {
                            let survivable = false
                            
                            for (let j = 0; j < boardState.length; j++) {
                                let opponentCell = boardState[j]
                                let pieceCoordinate = calculateMoveWithPiece(boardState, opponentCell.row, opponentCell.col, opponentCell.chessPiece)
                                // If the attacker can be attacked
                                if (pieceCoordinate.moves.has(`c${cell.col}r${cell.row}`) && dangerCellsForWhiteKing.has(`c${pieceCoordinate.coordinates[0]}r${pieceCoordinate.coordinates[1]}`)) {
                                    survivable = true
                                }
                            }
                            if (survivable) {
                                console.log("SURVIVABLE")
                                
                            } else {
                                setIsWinnerData({message: "Congrats For White!", winner: "WHITE"})
                            }
                        } 
                    }
                }

                if (cell.chessPiece.team === "WHITE") {
                    if (dangerCellsForWhiteKing.has(`c${cell.col}r${cell.row}`)) {
                        
                        if (!isWhite) {
                            history.pop()
                            setBoardState(history[history.length - 1])
                            window.localStorage.setItem("history", JSON.stringify(history))
                            setIsWhite(true)
                        }

                        else if (calculateMoveWithPiece(boardState, cell.row, cell.col, cell.chessPiece, dangerCellsForWhiteKing, dangerCellsForBlackKing).moves.size <= 0) {
                            let survivable = false
                            for (let j = 0; j < boardState.length; j++) {
                                let opponentCell = boardState[j]
                                let pieceCoordinate = calculateMoveWithPiece(boardState, opponentCell.row, opponentCell.col, opponentCell.chessPiece)
                                if (pieceCoordinate.moves.has(`c${cell.col}r${cell.row}`) && dangerCellsForBlackKing.has(`c${pieceCoordinate.coordinates[0]}r${pieceCoordinate.coordinates[1]}`)) {
                                    survivable = true
                                }
                            }
                            if (survivable) {
                                console.log("SURVIVABLE")
                            } else {
                                setIsWinnerData({message: "Congrats For Black!", winner: "BLACK"})
                            }
                        }
                    } 
                }
            }
        }

        setDangerCellsForWhite(dangerCellsForWhiteKing)
        setDangerCellsForBlack(dangerCellsForBlackKing)
    }, [boardState])

    return (
        <>
            { isWinnerData ? 
            <motion.div initial={{y: -100}} animate={{y: 0}}>
                <WinnerAlertBox $winner={isWinnerData.winner} $primaryColor={primaryColor} $secondaryColor={secondaryColor} $tertiaryColor={tertiaryColor}> 
                    <h1> { isWinnerData.message } </h1> 
                    <button onClick={() => { 
                        setBoardState(calculateGrid()); 
                        window.localStorage.setItem("history", JSON.stringify([])); 
                        setIsWinnerData(); 
                        new Audio(startBoardSFX).play();
                        setIsWhite(true)
                        }}> PLAY AGAIN ? </button>
                </WinnerAlertBox>
            </motion.div>
                :
                <BoardContainer>
                {boardState.map((cellData, index) => {
                return (
                <Cell 
                    dangerCellsForWhite={dangerCellsForWhite}
                    dangerCellsForBlack={dangerCellsForBlack}
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
            }
            
        </>
    )
}

export default Board