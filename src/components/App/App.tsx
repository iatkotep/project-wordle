import Game from "../Game";
import Header from "../Header";
import Keyboard from "../Keyboard/Keyboard";
import { GameProvider } from "../GameContext/GameContext";
import Attempts from "../Attempts";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <GameProvider>
          <Attempts />
          <Keyboard />
          <Game />
        </GameProvider>
      </div>
    </div>
  );
}

export default App;
