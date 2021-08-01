import { Options } from "./Options";

export const TriviaCard = ({ trivia, currentQuestion }) => {
  return (
    <div className="card">
      <h1 className="text-primary">Q. {trivia.question}</h1>
      <h3>Question 1/5</h3>
      <div className="options">
        <Options key={trivia.Options} options={trivia.options} />
      </div>
    </div>
  );
};
