import React, { useEffect, useState } from "react";
import axios from "axios";

import "./traineeViews.css";

const Exercises = () => {
  const [exercises, setExercises] = useState(null);

  useEffect(() => {
    axios
      .get("course/getCoursesChapter/639114e227ba150662d88096")
      .then((res) => {
        res.data.chapters.forEach((chapter) => {
          if ((chapter.chapterTitle = "the Physics of neuro-chemistry")) {
            setExercises(chapter.exercise);
          }
        });
      });
  }, []);

  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const answerClicked = (valid) => {
    if (valid) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < exercises.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const retakeExercise = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const goBack = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="Exercises">
      <h1>Exercise of something</h1>

      {showResult ? (
        <div className="exercise-result">
          <h1> Result</h1>
          {exercises && (
            <h2>
              {" "}
              {score} of {exercises.length} questions correct - (
              {(score / exercises.length) * 100}%)
            </h2>
          )}
          {/* <h2> {score} of 5 questions correct - (5%)</h2> */}
          <p></p>
          <button onClick={() => retakeExercise()}> Retake exercise</button>
          <button onClick={() => goBack()}> Return to course</button>
        </div>
      ) : (
        <div className="questions-card">
          {exercises && (
            <h3>
              Question {currentQuestion + 1} of {exercises.length}
            </h3>
          )}

          <h2 className="question-text">
            {exercises && exercises[currentQuestion].questionHead}
          </h2>
          <ul>
            {exercises &&
              exercises[currentQuestion].answers.map((answer) => {
                return (
                  <li
                    key={answer.answerBody}
                    onClick={() => answerClicked(answer.valid)}
                  >
                    {answer.answerBody}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Exercises;
