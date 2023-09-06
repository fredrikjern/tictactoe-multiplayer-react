function Square({ value, updateBoard, id, player, player1turn }) {
  const isPlayer1 = player === 1;
  const isClickable = isPlayer1 === player1turn && value === "";

  function handleClick() {
    console.log(id);
    if (isClickable) {
      updateBoard(id, isPlayer1 ? "X" : "O");
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`bg-lime-200 p-4 aspect-square flex w-20 hover:scale-105 hover:bg-green-200 ${
        !isClickable ? "cursor-not-allowed" : ""
      }`}
    >
      <div className="m-auto aspect-square">{value}</div>
    </div>
  );
}

export default Square;
