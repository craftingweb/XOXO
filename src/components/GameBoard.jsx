import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(indexRaw, indexCol) {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [...prevGameBoard];
      updateBoard[indexRaw][indexCol] = activePlayerSymbol;
      return updateBoard;
    });
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((raw, indexRaw) => (
        <li key={indexRaw}>
          <ol>
            {raw.map((playerSymbol, indexCol) => (
              <li key={indexCol}>
                <button onClick={() => handleSelectSquare(indexRaw, indexCol)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
