import React, { useState } from "react";
import { questions } from "./questions.js";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (idx) => {
    setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setShowFeedback(true);
    if (selected === questions[current].answer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="quiz-container">
        <h2>Quiz Complete!</h2>
        <p>Your score: {score} / {questions.length}</p>
        <button onClick={() => {
          setCurrent(0);
          setScore(0);
          setFinished(false);
        }}>Restart Quiz</button>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="quiz-container" role="main" aria-labelledby="question-text">
      <h2 id="question-text">Question {current + 1} of {questions.length}</h2>
      <p>{q.question}</p>
      <ul className="options-list">
        {q.options.map((opt, idx) => (
          <li key={idx}>
            <label>
              <input
                type="radio"
                name="option"
                checked={selected === idx}
                onChange={() => handleSelect(idx)}
                aria-checked={selected === idx}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
      {!showFeedback && (
        <button onClick={handleSubmit} disabled={selected === null} aria-disabled={selected === null}>
          Submit
        </button>
      )}
      {showFeedback && (
        <div className="feedback" aria-live="polite">
          {selected === q.answer ? (
            <span style={{ color: 'green' }}>Correct!</span>
          ) : (
            <span style={{ color: 'red' }}>Incorrect.</span>
          )}
          <div className="explanation">{q.explanation}</div>
          <button onClick={handleNext}>
            {current + 1 < questions.length ? "Next Question" : "Finish Quiz"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
