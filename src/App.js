import React from "react";
import "./App.scss";
import Game from "./Game";
import { questions } from "./questions";
import Result from "./Result";

function App() {
  const [step, setStep] = React.useState(0);
  console.log("step :", step);
  const [score, setScore] = React.useState(0);
  const question = questions[step];
  const onVariantClick = (id) => {
    setStep(step + 1);
    console.log(" handler step :", step);
    if (id == question.correct) {
      setScore(score + 1);
    }
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} onVariantClick={onVariantClick} question={question} />
      ) : (
        <Result setScore={setScore} setStep={setStep} score={score} />
      )}
    </div>
  );
}

export default App;
