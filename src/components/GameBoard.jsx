import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(indexRaw, indexCol) {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [...prevGameBoard].map((innerArray) => [
        ...innerArray,
      ]);
      updateBoard[indexRaw][indexCol] = "X";
      return updateBoard;
    });
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
