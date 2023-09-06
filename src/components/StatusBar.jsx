export default function StatusBar({ game, player }) {
    //console.log(game.player1turn, "player1turn inne i info");
  return (
    <div className="flex p-2 gap-4">
      <div
        className={
          game.player1turn ? "bg-slate-300 rounded-full" : "rounded-full"
        }
      >
        <h3
          className={
            player === 1
              ? " border border-green-700  rounded-full p-1 px-2"
              : "p-1 px-2"
          }
        >
          Player 1
        </h3>
      </div>
      <div>It's player {game.player1turn ? 1 : 2}</div>
      <div
        className={
          !game.player1turn ? "bg-slate-300 rounded-full" : " rounded-full"
        }
      >
        <h3
          className={
            player === 2
              ? " border border-green-700 rounded-full p-1 px-2"
              : "p-1"
          }
        >
          Player 2
        </h3>
      </div>
    </div>
  );
}
