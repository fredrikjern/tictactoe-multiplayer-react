import Board from "./Board";
import StatusBar from "./StatusBar";
import Info from "./StatusBar";
import Welcome from "./Welcome";

import {
  createGame,
  findGameID,
  longPoll,
  player2join,
  updateAPI,
} from "./gameFunctions.js";

import { useState, useEffect } from "react";

export default function Game() {
  useEffect(() => {
    console.log("Nu laddades appensss"), [];
  });
  const [gameOn, setGameOn] = useState(false);
  const [gameID, setGameID] = useState(0);
  const [gameObject, setGameObject] = useState([]);
  const lastGameID = 0;

  useEffect(() => {
    async function long() {
      //console.log("function long() körs i useeffect [gameID]");
      if (gameID === 0)
        return console.log("first render inside long (Not longPoll)");

      if (player === 1) {
        console.log("player===1 long()");
        const resgame = await longPoll(gameID);
        console.log(resgame, "long() player===1");
        setGame(resgame);
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

    long();

    console.log(gameID, " gameId changed");
  }, [gameID]);
  //! -------------- startGame() ---------------------------------------------
  async function startGame() {
    console.log("Start game körs");
    setGameOn(true); // Visar boardet?
    const gameData = await createGame();
    console.log(await gameData, " gameData"); // Skickar post req, skapar inlägg i DB, returnerar db-inlägget med spelplan, id etc
    //console.log(gameData.list.gameID, "  game ID i startgame efter await");// Skickar post req, skapar inlägg i DB, returnerar db-inlägget med spelplan, id etc
    setGameID(gameData._id);
    setPlayer(1); // The one who starts become player1
  }
  //! -------------- joinGame() ----------------------------------------------
  async function joinGame(gameNumber) {
    let firstgameID = await findGameID(gameNumber);
    console.log(firstgameID, "gameID in joingame welcome");

    setGameOn(true);
    setGameID(firstgameID);
    setPlayer(2); // The one who join become player 2
  }

  //? ---------------setPlayer------------------------------------------

  const [player, setPlayer] = useState(0);
  useEffect(() => {
    if (player === 0) return;
    console.log("Du är Player : ", player), [player];
  }); // Player sätts när man klickar på Start / Join

  //? ------------- game setGame() -------
  const [game, setGame] = useState({
    board: ["", "", "", "", "", "", "", "", ""],
    player1turn: false,
    player2joined: false,
    gameNumber: 1,
    initial: true,
  });
  useEffect(() => {
    // Varje gång game uppdateras
    async function waiting() {
      console.log("waiting() körs");
      if (game.initial) return console.log("initial");

      const longpoll = await longPoll(gameID);
      console.log(longpoll, "waiting data from longPoll");
      //setGame(longpoll);
    }

    waiting();
  }, [game]);

  async function updateBoard(position, player) {
    console.log(position, " ", player);
    // setGame(() => {
    //   let newTurn = !game.player1turn;
    //   console.log(newTurn);
    //   //console.log([...game.board], "game.b");
    //   let newBoard = [...game.board];
    //   newBoard[position] = player;
    //   return { ...game, board: newBoard, player1turn: newTurn };
    // });
      let newBoard = [...game.board];
      newBoard[position] = player;
    //! Skicka sedan api post med ( game )

    await updateAPI(game._id,game.player1turn,newBoard);

    let res = await longPoll(game._id);
    console.log(res);
    //? En longpoll??
  }

  return (
    <section className="flex justify-center p-2 grow">
      {gameOn ? (
        <div className="flex flex-col">
          <StatusBar game={game} player={player} />
          <Board game={game} updateBoard={updateBoard} player={player} />
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
