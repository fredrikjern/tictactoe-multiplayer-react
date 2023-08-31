function Square({ value, updateBoard, id, player }) {
  function handleClick() {
    updateBoard(id, (player===1?"X":"O"));
  }
  return (
    <div
          onClick = { value===""?handleClick:undefined }
      className="bg-lime-200 p-4 aspect-square flex w-20 hover:scale-105 hover:bg-green-200"
    >
      <div className="m-auto aspect-square">{value}</div>
    </div>
  );
}
export default Square;
