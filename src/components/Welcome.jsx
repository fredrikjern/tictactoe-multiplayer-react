import { useState } from "react";

export default function Welcome({ startGame, setGameOn, findGameID, setGameID, joinGame }) {
  const [username, setUsername] = useState("as");
  const [gameNumber, setGameNumber] = useState("");

  async function clickHandler(e) {
    e.preventDefault();
    console.log("joiny");
    console.log(gameNumber);
    joinGame(gameNumber)
     
  }

  return (
    <>
      <div className="flex gap-4 justify-between p-4 px-6 border-4 border-green-600 border-opacity-50">
        <button className="p-3 bg-green-950 text-slate-300" onClick={startGame}>
          Starta spel
        </button>
        <form className="flex flex-col border-2">
          <input
            onChange={(e) => {
              setGameNumber(e.target.value);
            }}
            type="text"
          />
          <button
            className="p-3 bg-green-950 text-slate-300"
            onClick={clickHandler}
          >
            Gå med i ett spel
          </button>
        </form>
      </div>
      {/* <div className="flex flex-col h-full gap-4 border-2 w-full">
        <h1>Welcome!</h1>
        <form className="flex flex-col gap-4 w-full">
          <label htmlFor="username">Fyll i ditt användarnamn</label>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="p-2 border-2"
            type="text"
            id="username"
          />
        </form>

        {username.length > 0 && (
          <div className="flex gap-4 justify-between p-4 px-6 border-4 border-green-600 border-opacity-50">
            <button
              className="p-3 bg-green-950 text-slate-300"
              onClick={startGame}
            >
              Starta spel
            </button>
            <form action="submit" className="flex flex-col border-2">
              <input
                onChange={(e) => {
                  setGameNumber(e.target.value);
                }}
                type="text"
              />
              <button
                className="p-3 bg-green-950 text-slate-300"
                onClick={submitHandler}
              >
                Gå med i ett spel
              </button>
            </form>
          </div>
        )}
      </div>
    </> */}
    </>
  );
}
