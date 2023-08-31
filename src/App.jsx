import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
  const [gameOn, setGameOn] = useState(false);
  function startGame() {
    setGameOn(true)
    console.log(gameOn, "startgame");
    
  }
  const [player, setPlayer] = useState(1);

  const [game, setGame] = useState({
    board: ["", "", "", "", "", "", "", "", ""],
    player1turn: true,
  });
  function togglePlayer() {
    setPlayer(player === 1 ? 2 : 1);
    setGame(() => {
      return { ...game, player1turn: !game.player1turn };
    });
  }
  console.log(game);
  useEffect(() => {
    console.log("Nu laddades appen"), [];
  });
  useEffect(() => {
    console.log("Toggg", player), [player];
  });
  function updateBoard(position, player) {
    setGame(() => {
      //console.log([...game.board], "game.b");
      let newBoard = [...game.board];
      newBoard[position] = player;
      return { ...game, board: newBoard };
    });
  }

  return (
    <>
      <Header game={game} gameOn={ gameOn} togglePlayer={togglePlayer} />
      {!gameOn && (
        <main className="flex flex-grow justify-center p-2 h-full">
          <Welcome startGame={startGame} />
        </main>
      )}

      {gameOn && (
        <main className="flex flex-grow justify-center p-2 h-full">
          <Board game={game} updateBoard={updateBoard} player={player} />
        </main>
      )}
      <Footer/>
    </>
  );
}

export default App;
