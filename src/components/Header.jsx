function Header({ game,gameOn, togglePlayer }) {
  return (
    <header className="bg-green-800 flex justify-between p-3 px-5">
      {gameOn && (
        <div
          className={
            game.player1turn ? "bg-green-900 px-3 p-2 rounded-full" : "p-2 px-3"
          }
        >
          {" "}
          Player 1
        </div>
      )}
      <h1>Tic Tac Toe</h1>
          {gameOn &&
          <button
        onClick={togglePlayer}
        className="bg-green-700 p-2 px-3 rounded-3xl text-sm"
      >
        Byt spelare
      </button>
          }
      {gameOn && (
        <div
          className={
            !game.player1turn ? "bg-green-900 px-3 p-2 rounded-full" : "p-2 px-3"
          }
        >
          {" "}
          Player 2
        </div>
      )}
    </header>
  );
}
export default Header