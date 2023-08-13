import React from "react";
import { questions } from "./questions";

export default function Result({ score, setStep, setScore }) {
  const onTryAgainClick = () => {
    setScore(0);
    setStep(0);
  };
  return (
    <div div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        You'v matched {score} from {questions.length} questions!
      </h2>
      <button onClick={onTryAgainClick}> Try again</button>
    </div>
  );
}
