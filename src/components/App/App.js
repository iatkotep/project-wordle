import Game from "../Game";
import Header from "../Header";
import Keyboard from "../Keyboard/Keyboard";
import { GameProvider } from "../GameContext/GameContext";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <GameProvider>
          <Game />
          <Keyboard />
        </GameProvider>
      </div>
    </div>
  );
}

export default App;
