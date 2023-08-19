import chessPieceData from "../chessPieceData"


export const calculateDangerKing = ( board, row, col, chessPiece, dangerCellForWhite=new Set([]), dangerCellForBlack=new Set([])) => {
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

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                if (cell.chessPiece.team) {
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

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                if (cell.chessPiece.team) {
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

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                if (cell.chessPiece.team) {
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

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                if (cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    break
                }
            } else {
                break
            }
        }
    }

    if (chessPiece.chessPieceName === "HORSE") {
        let long = 2
        let short = 1

        if (remainingTopCells >= long) {
            if (remainingLeftCells >= short) {

                const cell = board.find(cell => {return (cell.col === col - short) && (cell.row === row - long)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${col - short}r${row - long}`)
                } 
            }
            if (remainingRightCells >= short) {

                const cell = board.find(cell => {return (cell.col === col + short) && (cell.row === row - long)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${col + short}r${row - long}`)
                } 
            }
        }

        if (remainingBottomCells >= long) {
            if (remainingLeftCells >= short) {

                const cell = board.find(cell => {return (cell.col === col - short) && (cell.row === row + long)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${col - short}r${row + long}`)
                } 
                
            }
            if (remainingRightCells >= short) {
                const cell = board.find(cell => {return (cell.col === col + short) && (cell.row === row + long)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${col + short}r${row + long}`)
                } 
            }
        }

        if (remainingLeftCells >= long) {
            if (remainingTopCells >= short) {

                const cell = board.find(cell => {return (cell.col === col - long) && (cell.row === row - short)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${col - long}r${row - short}`)
                } 

            }
            if (remainingBottomCells >= short) {

                const cell = board.find(cell => {return (cell.col === col - long) && (cell.row === row + short)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${col - long}r${row + short}`)
                } 
            }
        }

        if (remainingRightCells >= long) {
            if (remainingTopCells >= short) {

                const cell = board.find(cell => {return (cell.col === col + long) && (cell.row === row - short)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) { 
                   piecesPossibleMoves.moves.add(`c${col + long}r${row - short}`)
                } 
            }
            if (remainingBottomCells >= short) {

                const cell = board.find(cell => {return (cell.col === col + long) && (cell.row === row + short)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) { 
                    piecesPossibleMoves.moves.add(`c${col + long}r${row + short}`)
                } 
            }
        }

    }

    if (chessPiece.chessPieceName === "BISHOP") {
        // Finding Available Cells On Top Right
        for (let i = 1; i <= remainingRightCells; i++) {
            const topRight = [col + i, row - i]

            const cell = board.find(cell => {return (cell.col === topRight[0]) && (cell.row === topRight[1])})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${topRight[0]}r${topRight[1]}`)
                if ( cell.chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }

        // Finding Available Cells On Bottom Right
        for (let i = 1; i <= remainingRightCells; i++) {
            const bottomRight = [col + i, row + i]

            const cell = board.find(cell => {return (cell.col === bottomRight[0]) && (cell.row === bottomRight[1])})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${bottomRight[0]}r${bottomRight[1]}`)
                if ( cell.chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }

        // Finding Available Cells On Top Left
        for (let i = 1; i <= remainingLeftCells; i++) {
            const topLeft = [col - i, row - i]

            const cell = board.find(cell => {return (cell.col === topLeft[0]) && (cell.row === topLeft[1])})
             
            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${topLeft[0]}r${topLeft[1]}`)
                if ( cell.chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }

        // Finding Available Bottom Left
        for (let i = 1; i <= remainingLeftCells; i++) {
            const bottomLeft = [col - i, row + i]

            const cell = board.find(cell => {return (cell.col === bottomLeft[0]) && (cell.row === bottomLeft[1])})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${bottomLeft[0]}r${bottomLeft[1]}`)
                if ( cell.chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }
    }

    if (chessPiece.chessPieceName === "QUEEN") {
        // Check Left Horizontal
        for (let i = 1; i <= remainingRightCells; i++) {
            let checkCoordinateX = col + i
            let checkCoordinateY = row

            const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                if ( cell.chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    break
                }
            } else {
                break
            }
        }
        // Check Right Horizontal
        for (let i = 1; i <= remainingLeftCells; i++) {
            let checkCoordinateX = col - i
            let checkCoordinateY = row

            const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                if ( cell.chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    break
                }
            } else {
                break
            }
        }
        // Check Top Vertical
        for (let i = 1; i <= remainingTopCells; i++) {
            let checkCoordinateX = col
            let checkCoordinateY = row - i

            const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                if ( cell.chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    break
                }
            } else {
                break
            }
        }
        // Check Bottom Vertical
        for (let i = 1; i <= remainingBottomCells; i++) {
            let checkCoordinateX = col
            let checkCoordinateY = row + i

            const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team ) {
                piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                if ( cell.chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    break
                }
            } else {
                break
            }
        }
        // Check Top Left Diagonal
        for (let i = 1; i <= remainingLeftCells; i++) {
            const topLeft = [col - i, row - i]

            const cell = board.find(cell => {return (cell.col === topLeft[0]) && (cell.row === topLeft[1])})
             
            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${topLeft[0]}r${topLeft[1]}`)
                if ( cell.chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }
        
        // Check Top Right Diagonal
        for (let i = 1; i <= remainingRightCells; i++) {
            const topRight = [col + i, row - i]

            const cell = board.find(cell => {return (cell.col === topRight[0]) && (cell.row === topRight[1])})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team ) {
                piecesPossibleMoves.moves.add(`c${topRight[0]}r${topRight[1]}`)
                if ( cell.chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }
        // Check Bottom Left Diagonal
        for (let i = 1; i <= remainingLeftCells; i++) {
            const bottomLeft = [col - i, row + i]

            const cell = board.find(cell => {return (cell.col === bottomLeft[0]) && (cell.row === bottomLeft[1])})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team ) {
                piecesPossibleMoves.moves.add(`c${bottomLeft[0]}r${bottomLeft[1]}`)
                if ( cell.chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }
        // Check Bottom Right Diagonal
        for (let i = 1; i <= remainingRightCells; i++) {
            const bottomRight = [col + i, row + i]

            const cell = board.find(cell => {return (cell.col === bottomRight[0]) && (cell.row === bottomRight[1])})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team ) {
                piecesPossibleMoves.moves.add(`c${bottomRight[0]}r${bottomRight[1]}`)
                if ( cell.chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }
    }

    if (chessPiece.chessPieceName === "KING") {
        const step = 1
        if (chessPiece.team === "WHITE") {
            // Check Left Horizontal
            for (let i = 1; i <= remainingRightCells; i++) {
                let checkCoordinateX = col + i
                let checkCoordinateY = row

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    if ( cell.chessPiece.team ) {
                        piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                        break
                    }
                } else {
                    break
                }
            }
            // Check Right Horizontal
            for (let i = 1; i <= remainingLeftCells; i++) {
                let checkCoordinateX = col - i
                let checkCoordinateY = row

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    if ( cell.chessPiece.team ) {
                        piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                        break
                    }
                } else {
                    break
                }
            }
            // Check Top Vertical
            for (let i = 1; i <= remainingTopCells; i++) {
                let checkCoordinateX = col
                let checkCoordinateY = row - i

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    if ( cell.chessPiece.team ) {
                        piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                        break
                    }
                } else {
                    break
                }
            }
            // Check Bottom Vertical
            for (let i = 1; i <= remainingBottomCells; i++) {
                let checkCoordinateX = col
                let checkCoordinateY = row + i

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    if ( cell.chessPiece.team ) {
                        piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                        break
                    }
                } else {
                    break
                }
            }
            // Check Top Left Diagonal
            for (let i = 1; i <= remainingLeftCells; i++) {
                const topLeft = [col - i, row - i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === topLeft[0]) && (cell.row === topLeft[1])})
                
                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${topLeft[0]}r${topLeft[1]}`)
                    if ( cell.chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
            
            // Check Top Right Diagonal
            for (let i = 1; i <= remainingRightCells; i++) {
                const topRight = [col + i, row - i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === topRight[0]) && (cell.row === topRight[1])})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${topRight[0]}r${topRight[1]}`)
                    if ( cell.chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
            // Check Bottom Left Diagonal
            for (let i = 1; i <= remainingLeftCells; i++) {
                const bottomLeft = [col - i, row + i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === bottomLeft[0]) && (cell.row === bottomLeft[1])})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${bottomLeft[0]}r${bottomLeft[1]}`)
                    if ( cell.chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
            // Check Bottom Right Diagonal
            for (let i = 1; i <= remainingRightCells; i++) {
                const bottomRight = [col + i, row + i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === bottomRight[0]) && (cell.row === bottomRight[1])})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                } 

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${bottomRight[0]}r${bottomRight[1]}`)
                    if ( cell.chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
        }

        if (chessPiece.team === "BLACK") {
            // Check Left Horizontal
            for (let i = 1; i <= remainingRightCells; i++) {
                let checkCoordinateX = col + i
                let checkCoordinateY = row

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    if ( cell.chessPiece.team ) {
                        piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                        break
                    }
                } else {
                    break
                }
            }
            // Check Right Horizontal
            for (let i = 1; i <= remainingLeftCells; i++) {
                let checkCoordinateX = col - i
                let checkCoordinateY = row

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    if ( cell.chessPiece.team ) {
                        piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                        break
                    }
                } else {
                    break
                }
            }
            // Check Top Vertical
            for (let i = 1; i <= remainingTopCells; i++) {
                let checkCoordinateX = col
                let checkCoordinateY = row - i

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    if ( cell.chessPiece.team ) {
                        piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                        break
                    }
                } else {
                    break
                }
            }
            // Check Bottom Vertical
            for (let i = 1; i <= remainingBottomCells; i++) {
                let checkCoordinateX = col
                let checkCoordinateY = row + i

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                    if ( cell.chessPiece.team ) {
                        piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                        break
                    }
                } else {
                    break
                }
            }
            // Check Top Left Diagonal
            for (let i = 1; i <= remainingLeftCells; i++) {
                const topLeft = [col - i, row - i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === topLeft[0]) && (cell.row === topLeft[1])})
                
                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${topLeft[0]}r${topLeft[1]}`)
                    if ( cell.chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
            
            // Check Top Right Diagonal
            for (let i = 1; i <= remainingRightCells; i++) {
                const topRight = [col + i, row - i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === topRight[0]) && (cell.row === topRight[1])})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${topRight[0]}r${topRight[1]}`)
                    if ( cell.chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
            // Check Bottom Left Diagonal
            for (let i = 1; i <= remainingLeftCells; i++) {
                const bottomLeft = [col - i, row + i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === bottomLeft[0]) && (cell.row === bottomLeft[1])})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${bottomLeft[0]}r${bottomLeft[1]}`)
                    if ( cell.chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
            // Check Bottom Right Diagonal
            for (let i = 1; i <= remainingRightCells; i++) {
                const bottomRight = [col + i, row + i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === bottomRight[0]) && (cell.row === bottomRight[1])})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team ) {
                    piecesPossibleMoves.moves.add(`c${bottomRight[0]}r${bottomRight[1]}`)
                    if ( cell.chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
        }
    }

    if (chessPiece.chessPieceName === "PAWN") {
        const coordinate = `c${col}r${row}`

        if (chessPiece.team === "BLACK") {
            
            let hasOpponentCoordinate1 = [col + 1, row + 1]
            let hasOpponentCoordinate2 = [col - 1, row + 1]

            let cell = board.find(cell => {return cell.col === hasOpponentCoordinate1[0] && cell.row === hasOpponentCoordinate1[1]})

            if (cell) {
                piecesPossibleMoves.moves.add(`c${hasOpponentCoordinate1[0]}r${hasOpponentCoordinate1[1]}`)
            }

            cell = board.find(cell => {return cell.col === hasOpponentCoordinate2[0] && cell.row === hasOpponentCoordinate2[1]})

            if (cell) {
                piecesPossibleMoves.moves.add(`c${hasOpponentCoordinate2[0]}r${hasOpponentCoordinate2[1]}`)
            }
            
        } 
        
        else if (chessPiece.team === "WHITE") {

            let hasOpponentCoordinate1 = [col + 1, row - 1]
            let hasOpponentCoordinate2 = [col - 1, row - 1]

            let cell = board.find(cell => {return cell.col === hasOpponentCoordinate1[0] && cell.row === hasOpponentCoordinate1[1]})

            if (cell) {
                piecesPossibleMoves.moves.add(`c${hasOpponentCoordinate1[0]}r${hasOpponentCoordinate1[1]}`)
            }

            cell = board.find(cell => {return cell.col === hasOpponentCoordinate2[0] && cell.row === hasOpponentCoordinate2[1]})

            if (cell) {
                piecesPossibleMoves.moves.add(`c${hasOpponentCoordinate2[0]}r${hasOpponentCoordinate2[1]}`)
            }
        }
    }

    return piecesPossibleMoves
}

// Add The King Movement Functonality dangercells
export const calculateMoveWithPiece = ( board, row, col, chessPiece, dangerCellForWhite=new Set([]), dangerCellForBlack=new Set([])) => {

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

            if (!cell) {
                break
            } 

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

            if (!cell) {
                break
            } 

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

            if (!cell) {
                break
            } 

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

            if (!cell) {
                break
            } 

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

    if (chessPiece.chessPieceName === "HORSE") {
        let long = 2
        let short = 1

        if (remainingTopCells >= long) {
            if (remainingLeftCells >= short) {

                const cell = board.find(cell => {return (cell.col === col - short) && (cell.row === row - long)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${col - short}r${row - long}`)
                } 
            }
            if (remainingRightCells >= short) {

                const cell = board.find(cell => {return (cell.col === col + short) && (cell.row === row - long)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${col + short}r${row - long}`)
                } 
            }
        }

        if (remainingBottomCells >= long) {
            if (remainingLeftCells >= short) {

                const cell = board.find(cell => {return (cell.col === col - short) && (cell.row === row + long)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${col - short}r${row + long}`)
                } 
                
            }
            if (remainingRightCells >= short) {
                const cell = board.find(cell => {return (cell.col === col + short) && (cell.row === row + long)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${col + short}r${row + long}`)
                } 
            }
        }

        if (remainingLeftCells >= long) {
            if (remainingTopCells >= short) {

                const cell = board.find(cell => {return (cell.col === col - long) && (cell.row === row - short)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${col - long}r${row - short}`)
                } 

            }
            if (remainingBottomCells >= short) {

                const cell = board.find(cell => {return (cell.col === col - long) && (cell.row === row + short)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${col - long}r${row + short}`)
                } 
            }
        }

        if (remainingRightCells >= long) {
            if (remainingTopCells >= short) {

                const cell = board.find(cell => {return (cell.col === col + long) && (cell.row === row - short)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) { 
                   piecesPossibleMoves.moves.add(`c${col + long}r${row - short}`)
                } 
            }
            if (remainingBottomCells >= short) {

                const cell = board.find(cell => {return (cell.col === col + long) && (cell.row === row + short)})

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) { 
                    piecesPossibleMoves.moves.add(`c${col + long}r${row + short}`)
                } 
            }
        }

    }

    if (chessPiece.chessPieceName === "BISHOP") {
        // Finding Available Cells On Top Right
        for (let i = 1; i <= remainingRightCells; i++) {
            const topRight = [col + i, row - i]

            const cell = board.find(cell => {return (cell.col === topRight[0]) && (cell.row === topRight[1])})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${topRight[0]}r${topRight[1]}`)
                if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }

        // Finding Available Cells On Bottom Right
        for (let i = 1; i <= remainingRightCells; i++) {
            const bottomRight = [col + i, row + i]

            const cell = board.find(cell => {return (cell.col === bottomRight[0]) && (cell.row === bottomRight[1])})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${bottomRight[0]}r${bottomRight[1]}`)
                if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }

        // Finding Available Cells On Top Left
        for (let i = 1; i <= remainingLeftCells; i++) {
            const topLeft = [col - i, row - i]

            const cell = board.find(cell => {return (cell.col === topLeft[0]) && (cell.row === topLeft[1])})
             
            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${topLeft[0]}r${topLeft[1]}`)
                if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }

        // Finding Available Bottom Left
        for (let i = 1; i <= remainingLeftCells; i++) {
            const bottomLeft = [col - i, row + i]

            const cell = board.find(cell => {return (cell.col === bottomLeft[0]) && (cell.row === bottomLeft[1])})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${bottomLeft[0]}r${bottomLeft[1]}`)
                if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }
    }

    if (chessPiece.chessPieceName === "QUEEN") {
        // Check Left Horizontal
        for (let i = 1; i <= remainingRightCells; i++) {
            let checkCoordinateX = col + i
            let checkCoordinateY = row

            const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

            if (!cell) {
                break
            } 

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
        // Check Right Horizontal
        for (let i = 1; i <= remainingLeftCells; i++) {
            let checkCoordinateX = col - i
            let checkCoordinateY = row

            const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

            if (!cell) {
                break
            } 

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
        // Check Top Vertical
        for (let i = 1; i <= remainingTopCells; i++) {
            let checkCoordinateX = col
            let checkCoordinateY = row - i

            const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

            if (!cell) {
                break
            } 

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
        // Check Bottom Vertical
        for (let i = 1; i <= remainingBottomCells; i++) {
            let checkCoordinateX = col
            let checkCoordinateY = row + i

            const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

            if (!cell) {
                break
            } 

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
        // Check Top Left Diagonal
        for (let i = 1; i <= remainingLeftCells; i++) {
            const topLeft = [col - i, row - i]

            const cell = board.find(cell => {return (cell.col === topLeft[0]) && (cell.row === topLeft[1])})
             
            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${topLeft[0]}r${topLeft[1]}`)
                if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }
        
        // Check Top Right Diagonal
        for (let i = 1; i <= remainingRightCells; i++) {
            const topRight = [col + i, row - i]

            const cell = board.find(cell => {return (cell.col === topRight[0]) && (cell.row === topRight[1])})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${topRight[0]}r${topRight[1]}`)
                if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }
        // Check Bottom Left Diagonal
        for (let i = 1; i <= remainingLeftCells; i++) {
            const bottomLeft = [col - i, row + i]

            const cell = board.find(cell => {return (cell.col === bottomLeft[0]) && (cell.row === bottomLeft[1])})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${bottomLeft[0]}r${bottomLeft[1]}`)
                if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }
        // Check Bottom Right Diagonal
        for (let i = 1; i <= remainingRightCells; i++) {
            const bottomRight = [col + i, row + i]

            const cell = board.find(cell => {return (cell.col === bottomRight[0]) && (cell.row === bottomRight[1])})

            if (!cell) {
                break
            } 

            if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                piecesPossibleMoves.moves.add(`c${bottomRight[0]}r${bottomRight[1]}`)
                if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                    break
                }
            } else {
                break
            }
        }
    }

    if (chessPiece.chessPieceName === "KING") {
        const step = 1
        if (chessPiece.team === "WHITE") {
            // Check Left Horizontal
            for (let i = 1; i <= remainingRightCells; i++) {
                let checkCoordinateX = col + i
                let checkCoordinateY = row

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

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
            // Check Right Horizontal
            for (let i = 1; i <= remainingLeftCells; i++) {
                let checkCoordinateX = col - i
                let checkCoordinateY = row

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

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
            // Check Top Vertical
            for (let i = 1; i <= remainingTopCells; i++) {
                let checkCoordinateX = col
                let checkCoordinateY = row - i

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

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
            // Check Bottom Vertical
            for (let i = 1; i <= remainingBottomCells; i++) {
                let checkCoordinateX = col
                let checkCoordinateY = row + i

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

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
            // Check Top Left Diagonal
            for (let i = 1; i <= remainingLeftCells; i++) {
                const topLeft = [col - i, row - i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === topLeft[0]) && (cell.row === topLeft[1])})
                
                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${topLeft[0]}r${topLeft[1]}`)
                    if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
            
            // Check Top Right Diagonal
            for (let i = 1; i <= remainingRightCells; i++) {
                const topRight = [col + i, row - i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === topRight[0]) && (cell.row === topRight[1])})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${topRight[0]}r${topRight[1]}`)
                    if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
            // Check Bottom Left Diagonal
            for (let i = 1; i <= remainingLeftCells; i++) {
                const bottomLeft = [col - i, row + i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === bottomLeft[0]) && (cell.row === bottomLeft[1])})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${bottomLeft[0]}r${bottomLeft[1]}`)
                    if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
            // Check Bottom Right Diagonal
            for (let i = 1; i <= remainingRightCells; i++) {
                const bottomRight = [col + i, row + i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === bottomRight[0]) && (cell.row === bottomRight[1])})

                if (!cell || dangerCellForWhite.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${bottomRight[0]}r${bottomRight[1]}`)
                    if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
        }

        if (chessPiece.team === "BLACK") {
            // Check Left Horizontal
            for (let i = 1; i <= remainingRightCells; i++) {
                let checkCoordinateX = col + i
                let checkCoordinateY = row

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

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
            // Check Right Horizontal
            for (let i = 1; i <= remainingLeftCells; i++) {
                let checkCoordinateX = col - i
                let checkCoordinateY = row

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

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
            // Check Top Vertical
            for (let i = 1; i <= remainingTopCells; i++) {
                let checkCoordinateX = col
                let checkCoordinateY = row - i

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

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
            // Check Bottom Vertical
            for (let i = 1; i <= remainingBottomCells; i++) {
                let checkCoordinateX = col
                let checkCoordinateY = row + i

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

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
            // Check Top Left Diagonal
            for (let i = 1; i <= remainingLeftCells; i++) {
                const topLeft = [col - i, row - i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === topLeft[0]) && (cell.row === topLeft[1])})
                
                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${topLeft[0]}r${topLeft[1]}`)
                    if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
            
            // Check Top Right Diagonal
            for (let i = 1; i <= remainingRightCells; i++) {
                const topRight = [col + i, row - i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === topRight[0]) && (cell.row === topRight[1])})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${topRight[0]}r${topRight[1]}`)
                    if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
            // Check Bottom Left Diagonal
            for (let i = 1; i <= remainingLeftCells; i++) {
                const bottomLeft = [col - i, row + i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === bottomLeft[0]) && (cell.row === bottomLeft[1])})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${bottomLeft[0]}r${bottomLeft[1]}`)
                    if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
            }
            // Check Bottom Right Diagonal
            for (let i = 1; i <= remainingRightCells; i++) {
                const bottomRight = [col + i, row + i]

                if (i > step) {
                    break
                }

                const cell = board.find(cell => {return (cell.col === bottomRight[0]) && (cell.row === bottomRight[1])})

                if (!cell || dangerCellForBlack.has(`c${cell.col}r${cell.row}`)) {
                    break
                }

                if (!cell.chessPiece.chessPieceName || cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${bottomRight[0]}r${bottomRight[1]}`)
                    if ( cell.chessPiece.team && cell.chessPiece.team !== chessPiece.team ) {
                        break
                    }
                } else {
                    break
                }
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

            for (let i = 1; i <= remainingBottomCells; i++) {
                if (i > step) {
                    break
                }

                let checkCoordinateX = col
                let checkCoordinateY = row + i

                

                let cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell.chessPiece.chessPieceName) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                } 

                else {
                    break
                }
            }
            let hasOpponentCoordinate1 = [col + 1, row + 1]
            let hasOpponentCoordinate2 = [col - 1, row + 1]

            let cell = board.find(cell => {return cell.col === hasOpponentCoordinate1[0] && cell.row === hasOpponentCoordinate1[1]})

            if (cell) {
                if (cell.chessPiece.chessPieceName && cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${hasOpponentCoordinate1[0]}r${hasOpponentCoordinate1[1]}`)
                }
            }

            cell = board.find(cell => {return cell.col === hasOpponentCoordinate2[0] && cell.row === hasOpponentCoordinate2[1]})

            if (cell) {
                if (cell.chessPiece.chessPieceName && cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${hasOpponentCoordinate2[0]}r${hasOpponentCoordinate2[1]}`)
                }
            }
            
        } else if (chessPiece.team === "WHITE") {

            if (whitePawnStartingPlaces.has(coordinate)) {
                step = 2
            }

            for (let i = 1; i <= remainingTopCells; i++) {
                if (i > step) {
                    break
                }

                let checkCoordinateX = col
                let checkCoordinateY = row - i

                let cell = board.find(cell => {return cell.col === checkCoordinateX && cell.row === checkCoordinateY})

                if (!cell.chessPiece.chessPieceName) {
                    piecesPossibleMoves.moves.add(`c${checkCoordinateX}r${checkCoordinateY}`)
                } 

                else {
                    break
                }
            }

            let hasOpponentCoordinate1 = [col + 1, row - 1]
            let hasOpponentCoordinate2 = [col - 1, row - 1]

            let cell = board.find(cell => {return cell.col === hasOpponentCoordinate1[0] && cell.row === hasOpponentCoordinate1[1]})

            if (cell) {
                if (cell.chessPiece.chessPieceName && cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${hasOpponentCoordinate1[0]}r${hasOpponentCoordinate1[1]}`)
                }
            }

            cell = board.find(cell => {return cell.col === hasOpponentCoordinate2[0] && cell.row === hasOpponentCoordinate2[1]})

            if (cell) {
                if (cell.chessPiece.chessPieceName && cell.chessPiece.team !== chessPiece.team) {
                    piecesPossibleMoves.moves.add(`c${hasOpponentCoordinate2[0]}r${hasOpponentCoordinate2[1]}`)
                }
            }
        }
    }

    return piecesPossibleMoves
}