import React, { useState } from "react";
import { useGameContext } from "../GameContext/GameContext";

interface AttemptProps {
  attempt: string;
}
const Attempt = ({ attempt }: AttemptProps) => {
  const chars = attempt.split("");

  console.log("attempt!", attempt);
  return (
    <div className="attempt">
      {Array<string>(5)
        .fill("")
        .map((_, i) => (
          <div className="attempt-char" key={i}>
            {chars[i] || null}
          </div>
        ))}
    </div>
  );
};

const Attempts = () => {
  const { attempts } = useGameContext();
  return (
    <ol className="attempt-list">
      {Array<string>(6)
        .fill("")
        .map((_, i) => (
          <li key={i} className="attempt-item">
            <Attempt attempt={attempts[i] || ""} />
          </li>
        ))}
    </ol>
  );
};

export default Attempts;
