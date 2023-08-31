export default function Welcome({startGame}) {
  return (
    <>
      <div className="h-full">
        <h1>Welcome!</h1>
        <form>
          <label htmlFor="username">Fyll i ditt användarnamn</label>
          <input className="p-2 border-2"type="text" id="username" />
      <div><button className="p-3 bg-green-950 text-slate-300" onClick={startGame}>Starta spel</button></div>
        </form>
      </div>
    </>
  );
}
