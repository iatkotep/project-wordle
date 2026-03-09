import { createContext } from "react";
import { KeyStatus } from "../../data";

export type Key = { letter: string; status: KeyStatus; isActive: boolean };
export type KeyboardRow = Key[];
export type GameContextValue = {
  guess: string;
  handleGuessChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  attempts: string[];

  keyboardRows: KeyboardRow[];
  handleKeyClick: (letter: string) => () => void;
};

const GameContext = createContext<GameContextValue | null>(null);

export default GameContext;
