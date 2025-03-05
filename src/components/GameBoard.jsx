export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((raw, indexRaw) => (
        <li key={indexRaw}>
          <ol>
            {raw.map((playerSymbol, indexCol) => (
              <li key={indexCol}>
                <button
                  onClick={() => onSelectSquare(indexRaw, indexCol)}
                  disabled={playerSymbol !== null}
                >
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
