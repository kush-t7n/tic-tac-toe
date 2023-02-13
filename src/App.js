import "./App.css";
//import Navbar from "./Components/Navbar";
//import TextForm from "./Components/TextForm";
//import { TicTacToe } from "./Components/Tictactoe";
import Board from "./TicTacToeGame/Board";

function App() {
  return (
    <>
      <>
        {/* <Navbar title="TextUtils" aboutText="About" />
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" />
      <TicTacToe />
      <game-board />
      <box />
    </div> */}
      </>
      <div>
        <Board />
      </div>
    </>
  );
}

export default App;
