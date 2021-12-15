import React, { useState } from "react";
import "./Game.scss";
import Board from "./Board";
import { calculateWinner } from "./helper";

const Game = () => {
  const [history, setHistory] = useState([]);
  const [turnX, setTurnX] = useState(true);
  const [roundCounter, setRoundCounter] = useState(1);
  const [mark, setMark] = useState("X");
  console.log(history);
  console.log(roundCounter);

  const onClick = e => {
    if (turnX) {
      setMark("X");
    } else {
      setMark("O");
    }
    e.target.innerHTML = mark;
    setHistory([...history, mark]);
    setTurnX(!turnX);
    setRoundCounter(roundCounter => roundCounter + 1);
  };

  return (
    <div className="Game">
      <h1 className="title">Крестики-нолики</h1>
      <Board onClick={onClick} />
    </div>
  );
};

export default Game;
