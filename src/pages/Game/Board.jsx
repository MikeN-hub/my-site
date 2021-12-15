import React, { useState } from "react";
import Cell from "./Cell";

const Board = ({ onClick }) => {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <div className="Board">
      {board.map((item, index) => {
        return <Cell key={index} onClick={(e) => onClick(e)} />;
      })}
    </div>
  );
};

export default Board;
