import React, { useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
  
import "./traineeViews.css"
import Courses from "../../../../Models/Courses";


const Exercises = () => {  

    axios.get(`/getCourseChapter`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })


    const [showResult, setShowResult] = useState(false);
    const [score , setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const answerClicked = (valid) => {
        if(valid){
            setScore(score  + 1);
        }

        if(currentQuestion + 1 < Courses.CoursesSchema.chapter.exercise.length){
            setCurrentQuestion(currentQuestion  + 1);
        }
        else{
            setShowResult(true);
        }
    }

    const retakeExercise = () =>{
        setScore(0);
        setCurrentQuestion(0);
        setShowResult(false);
    }

    const goBack = () =>{
        setScore(0);
        setCurrentQuestion(0);
        setShowResult(false);
    }

    return (
        <div className="Exercises">
            <h1>Exercise of something</h1>

            {showResult ?
                <div className="exercise-result">
                    <h1> Result</h1>
                    <h2> {score} of {Courses.CoursesSchema.chapter.exercise.questionHead} questions correct - ({( score / Courses.CoursesSchema.chapter.exercise.questionHead.length)*100}%)</h2>
                    <p></p>
                    <button onCLick ={() => retakeExercise()}> Retake exercise</button>
                    <button onClick={() => goBack()}> Return to course</button>
                </div>
                :
                <div className="questions-card">
                    {/* get questions from database so still needs some work on questions.length */}
                    {/* <h3>Question {currentQuestion + 1} of {questions.length}</h3> */}
                    <h3>Question {currentQuestion + 1} of {Courses.CoursesSchema.chapter.exercise.questionHead}</h3>
                    <h2 className="question-text">{Courses.CoursesSchema.chapter.exercise.questionHead[currentQuestion]}</h2>
                    <ul>
                        {Courses.CoursesSchema.chapter.exercise.questionHead[currentQuestion].Courses.CoursesSchema.chapter.exercise.answers.map((answerBody) => {
                            return(
                                <li onClick={() => answerClicked(Courses.CoursesSchema.chapter.exercise.answers.valid.true)}>{answerBody}</li>
                            );

                        })}

                    </ul>

                </div>
            }

        </div>
    );
}
export default Exercises;