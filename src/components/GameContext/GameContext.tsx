import { useContext, useMemo, useState } from "react";
import { keys } from "../../data";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameContext, { KeyboardRow } from "./context";

interface GameProviderProps {
  children: React.ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const [answer, setAnswer] = useState(() => sample(WORDS));

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const [guess, setGuess] = useState("gre");
  const [attempts, setAttempts] = useState(["great", "bread"]);
  const [keyboardState, setKeyboardState] = useState(keys);

  /// KEYBOARD STATE
  const keyboardRows = useMemo(
    () =>
      Object.entries(keyboardState).reduce<KeyboardRow[]>(
        (acc, [letter, { rowIdx, status }]) => {
          acc[rowIdx] = [
            ...acc[rowIdx],
            {
              letter,
              status,
              isActive: guess.toLowerCase().includes(letter.toLowerCase()),
            },
          ];
          return acc;
        },
        [[], [], []] as KeyboardRow[]
      ),
    [keyboardState, guess]
  );

  const handleGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
  };
  const handleKeyClick = (letter: string) => () => {
    setGuess((prevState) => `${prevState}${letter}`);
  };

  const value = {
    guess: guess,
    handleGuessChange,
    numAttempts: attempts.length,
    attempts,

    keyboardRows,
    handleKeyClick,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGameContext must be used within GameContext");

  return ctx;
};
