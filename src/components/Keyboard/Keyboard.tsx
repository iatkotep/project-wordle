import React, { useRef } from "react";
import classNames from "classnames";

import { useGameContext } from "../GameContext/GameContext";

const Keyboard = () => {
  const { keyboardRows, handleKeyClick } = useGameContext();
  return (
    <div className="keyboard">
      {keyboardRows.map((row, rowIdx) => (
        <div className="keyboard-row" key={rowIdx}>
          {row.map(({ letter, status, isActive }) => (
            <div
              className={classNames("keyboard-cell", {
                "keyboard-cell--active": isActive,
              })}
              key={letter}
              data-status={status}
              data-isactive={isActive}
            >
              <button
                className="keyboard-key"
                onClick={handleKeyClick(letter)}
                value={letter}
              >
                {letter}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
