import { useEffect } from "react";
import Square from "./Square";

function Board({ game, updateBoard, player }) {
  //console.log(game);
  useEffect(() => {
    console.log("board render");
  }, []);

  const board = game.board || {};

  return (
    <div className="flex flex-col border-2 gap-2 aspect-square p-2 h-full ">
      <div className="flex gap-2">
        <Square
          updateBoard={updateBoard}
          player1turn={game.player1turn}
          value={board[0]}
          player={player}
          id="0"
        />
        <Square
          updateBoard={updateBoard}
          player1turn={game.player1turn}
          value={board[1]}
          player={player}
          id="1"
        />
        <Square
          updateBoard={updateBoard}
          player1turn={game.player1turn}
          value={board[2]}
          player={player}
          id="2"
        />
      </div>
      <div className="flex gap-2">
        <Square
          updateBoard={updateBoard}
          player1turn={game.player1turn}
          value={board[3]}
          player={player}
          id="3"
        />
        <Square
          updateBoard={updateBoard}
          player1turn={game.player1turn}
          value={board[4]}
          player={player}
          id="4"
        />
        <Square
          updateBoard={updateBoard}
          player1turn={game.player1turn}
          value={board[5]}
          player={player}
          id="5"
        />
      </div>
      <div className="flex gap-2">
        <Square
          updateBoard={updateBoard}
          player1turn={game.player1turn}
          value={board[6]}
          player={player}
          id="6"
        />
        <Square
          updateBoard={updateBoard}
          player1turn={game.player1turn}
          value={board[7]}
          player={player}
          id="7"
        />
        <Square
          updateBoard={updateBoard}
          player1turn={game.player1turn}
          value={board[8]}
          player={player}
          id="8"
        />
      </div>
    </div>
  );
}
export default Board;
