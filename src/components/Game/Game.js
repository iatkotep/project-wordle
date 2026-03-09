import React, { useEffect, useRef } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { useGameContext } from "../GameContext/GameContext";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const { guess, handleGuessChange } = useGameContext();
  const refGuess = useRef(null);

  useEffect(() => {
    refGuess.current?.focus();
  }, [guess]);

  return (
    <div className="guess-input-wrapper">
      <label htmlFor="guess-input">Guess</label>
      <input
        id="guess-input"
        type={"text"}
        value={guess}
        onChange={handleGuessChange}
        ref={refGuess}
      />
    </div>
  );
}

export default Game;
