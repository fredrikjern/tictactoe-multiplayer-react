import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Game from "./components/Game";
function App() {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <Game />
        <Footer />
      </div>
      {/* {!gameOn && (
        <main className="flex flex-grow justify-center p-2 h-full">
          <Welcome startGame={startGame} />
        </main>
      )}
        
      {gameOn && (
        <main className="flex flex-grow justify-center p-2 h-full">
          <Board game={game} updateBoard={updateBoard} player={player} />
        </main>
      )} */}
    </>
  );
}

export default App;
