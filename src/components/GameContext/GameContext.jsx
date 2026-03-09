import { createContext, useContext, useMemo, useState } from "react";
import { keys } from "../../data";

const GuessContext = createContext(null);
const KeyboardContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [guessState, setGuessState] = useState("gre");
  const [keyboardState, setKeyboardState] = useState(keys);

  /// KEYBOARD STATE
  const keyboardRows = useMemo(
    () =>
      Object.entries(keyboardState).reduce(
        (acc, [letter, { row, status }]) => {
          acc[row] = [
            ...acc[row],
            {
              letter,
              status,
              isActive: guessState.toLowerCase().includes(letter.toLowerCase()),
            },
          ];
          return acc;
        },
        [[], [], []]
      ),
    [keyboardState, guessState]
  );

  const handleGuessChange = (e) => {
    setGuessState(e.target.value);
  };
  const handleKeyClick = (e) => {
    setGuessState((prevState) => `${prevState}${e.target.value}`);
  };

  const gValue = {
    guess: guessState,
    handleGuessChange,
  };

  const kValue = {
    keyboardRows,
    handleKeyClick,
  };

  return (
    <GuessContext.Provider value={gValue}>
      <KeyboardContext.Provider value={kValue}>
        {children}
      </KeyboardContext.Provider>
    </GuessContext.Provider>
  );
};

export const useGameContext = () => ({
  ...useContext(GuessContext),
  ...useContext(KeyboardContext),
});
