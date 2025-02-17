import React, { useState } from "react";
import "./TicTacToe.scss";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (currentBoard) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    return currentBoard.every((cell) => cell !== null) ? "Draw" : null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    
    const gameWinner = checkWinner(newBoard);
    setWinner(gameWinner);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="tic-tac-toe fade-in">
      <h2 style={{ color: "#FFEBEE" }} className="tic-tac-toe__title">Tic-Tac-Toe</h2>
      <div className="tic-tac-toe__board">
        {board.map((cell, index) => (
          <button key={index} className="tic-tac-toe__cell" onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>
      {winner && (
        <div className="tic-tac-toe__winner fade-in">
          {winner === "Draw" ? "Нічия!" : `Переможець: ${winner}`}
        </div>
      )}
      <button className="tic-tac-toe__reset" onClick={resetGame}>Restart</button>
    </div>
  );
};

export default TicTacToe;