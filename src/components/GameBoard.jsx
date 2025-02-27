const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((raw, indexRaw) => {
        <li key={indexRaw}>
          <ol>
            {raw.map((playerSymbol, index) => {
              <li key={index}>
                <button>{playerSymbol}</button>
              </li>;
            })}
          </ol>
        </li>;
      })}
    </ol>
  );
}
