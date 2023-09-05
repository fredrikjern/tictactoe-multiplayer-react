export default function Info({ game }) {
    //console.log(game.player1turn, "player1turn inne i info");
  return (
    <div className="flex p-2 gap-4">
      <div className={game.player1turn ? "bg-slate-300 p-1 px-2 rounded-full" : "p-1 px-2 rounded-full"}>
        <h3 className="p-1">Player 1</h3>
      </div>
      <div>It's player {game.player1turn ? 1 : 2}</div>
      <div className={!game.player1turn ? "bg-slate-300 p-1 px-2 rounded-full" : "p-1 px-2 rounded-full"}>
        <h3 className="p-1">Player 2</h3>
      </div>
    </div>
  );
}
