import Board from "./Board";
import Info from "./Info";
import Welcome from "./Welcome";

import {
  createGame,
  findGameID,
  longPoll,
  player2join,
} from "./gameFunctions.js";

import { useState, useEffect } from "react";

export default function Game() {
  useEffect(() => {
    console.log("Nu laddades appensss"), [];
  });
  const [gameOn, setGameOn] = useState(false);
  const [gameID, setGameID] = useState(0);
  const [gameObject, setGameObject] = useState([]);
  const lastGameID=0

  useEffect(() => {
    async function long() {
      console.log("function long() körs i useeffect [gameID]");
      if (gameID === 0)
        return console.log("first render inside long (Not longPoll)");

      if (player === 1) {
        const resgame = await longPoll(gameID);
        console.log(resgame);
      }
      if (player === 2) {
        console.log(
          "skicka att player2joined = true och player1turn = true inside long "
        );
        let datad = await player2join(gameID);
        console.log("long if player2 ");
        console.log(datad);
        setGame(datad);
      }
    }
    if (!gameID===lastGameID) {
      long();
      console.log(lastGameID, "last before");
      lastGameID = gameID
      console.log(lastGameID, "last after");
      
    }
    console.log(gameID, " gameId changed"), [gameID];
  });
  //! -----------------------------------------------------------
  async function startGame() {
    console.log("Start game körs");
    setGameOn(true); // Visar boardet?
    const gameData = await createGame();
    console.log(await gameData, " gameData"); // Skickar post req, skapar inlägg i DB, returnerar db-inlägget med spelplan, id etc
    //console.log(gameData.list.gameID, "  game ID i startgame efter await");// Skickar post req, skapar inlägg i DB, returnerar db-inlägget med spelplan, id etc
    setGameID(gameData._id);
    setPlayer(1); // The one who starts become player1
  }
  async function joinGame(gameNumber) {
    let firstgameID = await findGameID(gameNumber);
    console.log(firstgameID, "gameID in joingame welcome");

    setGameOn(true);
    setGameID(firstgameID);
    setPlayer(2); // The one who join become player 2
  }

  //? ---------------------------------------------------------

  const [player, setPlayer] = useState(0);
  useEffect(() => {
    if (player === 0) return;
    console.log("Du är Player : ", player), [player];
  }); // Player sätts när man klickar på Start / Join

  // useEffect(() => {
  //   const gameInit = { ...game };
  //   console.log(gameInit, " game init");
  // }, [gameOn]); // Behövs denna?
  //? ------------- game setGame() -------
  const [game, setGame] = useState({
    board: ["", "", "", "", "", "", "", "", ""],
    player1turn: false,
    player2joined: false,
    gameNumber: 1,
  });

  function updateBoard(position, player) {
    setGame(() => {
      //console.log([...game.board], "game.b");
      let newBoard = [...game.board];
      newBoard[position] = player;
      return { ...game, board: newBoard };
    });
    //! Skicka sedan api post med ( game )
  }

  return (
    <section className="flex justify-center p-2 grow">
      {gameOn ? (
        <div className="flex flex-col">
          <Info game={game} />
          <Board game={game} updateBoard={updateBoard} />
        </div>
      ) : (
        <Welcome
          startGame={startGame}
          findGameID={findGameID}
          setGameOn={setGameOn}
          setGameID={setGameID}
          joinGame={joinGame}
        />
      )}
    </section>
  );
}
