import { useState } from "react";
import "./App.css";
import TriviaData from "./data.json";
import { TriviaCard } from "./TriviaCard";

export const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const triviaHandler = (correctOption) => {
    if (correctOption) {
      setScore((score) => score + 5);
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    } else {
      setScore((score) => score - 5);
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    }
  };

  return (
    <>
      {currentQuestion >= TriviaData.trivia.triviaQuestions.length ? (
        <>
          <p>Quiz Over </p>
          <p>You Scored = {score}</p>
          <button onClick={() => setCurrentQuestion(0)}>Reset Quiz</button>
        </>
      ) : (
        <div className="card">
          <h1 className="text-primary">
            Q. {TriviaData.trivia.triviaQuestions[currentQuestion].question}
          </h1>
          <h3>
            Question {currentQuestion + 1}/
            {TriviaData.trivia.triviaQuestions.length}
          </h3>
          <div className="options">
            {TriviaData.trivia.triviaQuestions[currentQuestion].options.map(
              (options) => {
                return (
                  <div className="option">
                    <h1
                      className="text-secondary"
                      onClick={() => triviaHandler(options.isCorrect)}
                    >
                      {options.option}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </>
  );
};
