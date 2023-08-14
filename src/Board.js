import React, { useEffect, useState } from "react";
import axios from "axios"

// Function to calculate the winner of the game
const calculateWinner = (squares) => {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  
  // Check each winning pattern to find a winner
  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// Component for browsing the game history
const HistoryButton = ({ data, setSquares, setIsX, id }) => {
  const switchTurn = () => {
    if ((id + 1) % 2 === 0) {
      setIsX(false)
    } else {
      setIsX(true)
    }
  }
  return (
    <button onClick={() => {setSquares(data); switchTurn()}}> {id}  </button>
  )
}

// Square component represents a single square in the game grid
const Square = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

// Board component represents the game board and manages game state
const Board = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(null))
  const [onlineHistory, setOnlineHistory] = useState([])
  const [isX, setIsX] = React.useState(true);

  // Fetch current progress on server
  const getCurrentHistory = async () => {
    const result = await axios.get("http://localhost:9000/history")
    return result.data
  }

  const updateCurrentHistory = async (squares) => {
    const result = await axios.post("http://localhost:9000/update", {
      data: squares
    })
    return result.data
  }

  const restartHistory = async () => {
    const result = await axios.delete("http://localhost:9000/reset")
    return result.data
  }

  //Loading current game history
  useEffect(() => {
    try {
      getCurrentHistory().then((result) => {

        if (result.data.length % 2 === 0) {
          setIsX(false)
        }
  
        setSquares(result.data[result.data.length - 1])})
  
        getCurrentHistory().then(history => {
          setOnlineHistory(history.data)
        })

    } catch (err) {
      console.log(err)
    }
  }, [])
  
  // Handle a square click event
  const handleClick = (i) => {

    // Return early if the game is won or the square is already filled
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    
    // Update the clicked square with 'X' or 'O'
    squares[i] = isX ? 'X' : 'O'
    
    // Update game state
    setSquares(squares)
    setIsX(!isX)
    try {
      updateCurrentHistory(squares).then(result => {
        console.log(result)
        getCurrentHistory().then(history => {
          setOnlineHistory(history.data)
        })
      })
    } catch (err) {
      console.log(err)
    }
  }

  // Calculate the game winner based on the current state
  const winner = calculateWinner(squares)
  let status
  
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = 'Next player: ' + (isX ? 'X' : 'O');
  }
  
  // Restart the game by resetting the state
  const handleRestart = () => {
    setIsX(true)
    setSquares(Array(9).fill(null))

    try {
      restartHistory()
      setOnlineHistory([])
    } catch (err) {
      console.log(err)
    }
  }

  // Render a single square
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />
  }
  
  // Render the game board
  return (
    <>
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="status">{status}</div>
      <button className="restart" onClick={handleRestart}>Restart Game!</button>
    </div>

    <div className="history">
      { onlineHistory.map((data, index) => {
        return <HistoryButton setIsX={setIsX} setSquares={setSquares} id={index} data={data} key={index}></HistoryButton>
      }) }
    </div>
    </>
  )
}

export default Board