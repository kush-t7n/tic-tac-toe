import { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [boxValue, setBoxValue] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [currentTurn, setCurrentTurn] = useState("X");

  const calculateWin = () => {
    for (let i = 0; i < 3; i++) {
      if (
        boxValue[i] === boxValue[i + 1] &&
        boxValue[i + 1] === boxValue[i + 2]
      ) {
        // this wins

        return boxValue[i];
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        boxValue[i] === boxValue[i + 3] &&
        boxValue[i + 3] === boxValue[i + 6]
      ) {
        // this wins
        return boxValue[i];
      }
    }

    if (boxValue[0] === boxValue[4] && boxValue[4] === boxValue[8]) {
      // this wins
      return boxValue[0];
    }

    if (boxValue[2] === boxValue[4] && boxValue[4] === boxValue[6]) {
      // this wins
      return boxValue[2];
    }
    console.log("boxValue", boxValue);

    const findNull = boxValue.every((item) => item);

    if (findNull) return "Draw";

    return null;
  };

  return (
    <div>
      <div>Current Turn : {currentTurn}</div>
      <div>Winner : {calculateWin()}</div>
      <div
        onClick={() => {
          setBoxValue([null, null, null, null, null, null, null, null, null]);
        }}
      >
        Reset
      </div>
      <div className="game-board">
        {boxValue.map((value, currentIndex) => {
          return (
            <Box
              text={value}
              onClick={() => {
                const win = calculateWin();
                if (!value && !win) {
                  const newBoxValues = [...boxValue];
                  newBoxValues[currentIndex] = currentTurn;
                  setBoxValue(newBoxValues);
                  setCurrentTurn((oldValue) => (oldValue === "X" ? "O" : "X"));
                }
              }}
            ></Box>
          );
        })}
      </div>
    </div>
  );
};

const Box = ({ text, onClick }) => {
  return (
    <div className="box" onClick={onClick}>
      {text}
    </div>
  );
};

export { TicTacToe };
