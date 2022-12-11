import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
  
import "./traineeViews.css"


const Exercises = () => {  

    const [exercise , setExercise] = useState("");
    useEffect(() => {
        axios.get("/course/getCourseChapter/639114e227ba150662d88096?chapter=t")
        .then((res) => {
            console.log(res.data)
            setExercise(res.data);
        })
        .catch(error => console.error('error'))
      }, []);


    const [showResult, setShowResult] = useState(false);
    const [score , setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const answerClicked = (valid) => {
        if(valid){
            setScore(score  + 1);
        }

        if(currentQuestion + 1 < exercise){
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
                    {/* <h2> {score} of {exercise.questionHead.length} questions correct - ({( score / exercise.questionHead.length)*100}%)</h2> */}
                    <h2> {score} of 5 questions correct - (5%)</h2>
                    <p></p>
                    <button onCLick ={() => retakeExercise()}> Retake exercise</button>
                    <button onClick={() => goBack()}> Return to course</button>
                </div>
                :
                <div className="questions-card">
                    {/* <h3>Question {currentQuestion + 1} of {exercise.questionHead.length}</h3> */}
                    <h3>Question {currentQuestion + 1} of 5</h3>
                    {/* <h2 className="question-text">{exercise.questionHead[currentQuestion]}</h2> */}
                    <h2 className="question-text">test</h2>
                    <ul>
                        {exercise.questionHead[currentQuestion].answers.map((answer) => {
                            return(
                                <li onClick={() => answerClicked(answer.valid.true)}>{answer.answerBody}</li>
                            );

                        })}

                    </ul>

                </div>
            }

        </div>
    );
}
export default Exercises;