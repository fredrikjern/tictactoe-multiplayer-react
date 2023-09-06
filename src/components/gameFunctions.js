import { randomNumberStr, copyToClipboard } from "./functions.js";
const API_BASE = "http://localhost:3000/";
export async function createGame() {
  console.log("creategame körs");
  let randomnum = randomNumberStr();
  copyToClipboard(randomnum);
  try {
    const res = await fetch(`${API_BASE}lists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listname: randomnum,
        board: ["", "", "", "", "", "", "", "", ""],
        player1turn: false,
        player2joined: false,
        gameNumber: 1,
      }),
    });
    const data = await res.json();
    console.log(data.list.listname, "create game ");
    //let game_ID = data.list._id;
    return data.list;
  } catch (error) {
    console.log(error);
  }
}
export async function player2join(gameID) {
  try {
    const response = await fetch(`${API_BASE}lists/${gameID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        player1turn: true,
        player2joined: true,
      }),
    });
      const data = await response.json()
      return data.list
  } catch (error) {
      console.log(error);
  }
}
export async function fetchGame(gameID) {
  try {
    const response = await fetch(`${API_BASE}lists/${gameID}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function findGameID(gameName) {
  try {
    let res = await fetch(`${API_BASE}listsearch?listname=${gameName}`);
    let data = await res.json();
    let g = await data[0]._id;
    console.log(g, "findGameID");
    return g;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteGame(gameID) {
  try {
    const res = await fetch(`${API_BASE}lists/${gameID}`, {
      method: "DELETE",
    });
    return console.log("Game deleted: " + gameID);
  } catch (error) {
    console.log(error);
  }
}
export async function longPoll(gameID) {
    console.log("longPoll(",gameID,")");
  try {
    const response = await fetch(`${API_BASE}long/${gameID}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error, " longpoll");
  }
}
export async function updateAPI(gameID,player1turn,newBoard) {
    console.log("updateAPI");

  try {

    let res = await fetch(`${API_BASE}lists/${gameID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        board: newBoard,
        player1turn: !player1turn,
        initial: false,
      }),
    });
      let data = res.json();
      console.log(data, "data inne i updateAPI");
  } catch (error) {
    console.log(error);
  }
}
