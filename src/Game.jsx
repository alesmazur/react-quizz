import React from "react";
import { questions } from "./questions";

export default function Game({ step, onVariantClick, question }) {
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${(step / questions.length) * 100}% ` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li onClick={() => onVariantClick(index)} key={index}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
}
