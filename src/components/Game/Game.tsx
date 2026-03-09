import React, { useEffect, useRef } from "react";

import { useGameContext } from "../GameContext/GameContext";

function Game() {
  const { guess, handleGuessChange, attempts } = useGameContext();
  const refGuess = useRef<HTMLInputElement>(null);

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
        disabled={attempts.length >= 5}
      />
    </div>
  );
}

export default Game;
