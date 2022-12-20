import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
  
import "./traineeViews.css"


const Exercises = () => {  

    const [exercises , setExercises] = useState("");
    useEffect(() => {
        axios.get("course/getCoursesChapter/639114e227ba150662d88096?chapter=the Physics of neuro-chemistry")
        .then((res) => {
            console.log(res.data)
            let exercisesNumber = [];
            res.forEach
            (
              (chapters)=> 
              {
                exercisesNumber.push(chapters);
              }
          );
          

            setExercises(res.data);
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

        if(currentQuestion + 1 < exercises){
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
                    <h2> {score} of {exercises.length} questions correct - ({( score / exercises.length)*100}%)</h2>
                    {/* <h2> {score} of 5 questions correct - (5%)</h2> */}
                    <p></p>
                    <button onCLick ={() => retakeExercise()}> Retake exercise</button>
                    <button onClick={() => goBack()}> Return to course</button>
                </div>
                :
                <div className="questions-card">
                    <h3>Question {currentQuestion + 1} of {exercises.length}</h3>

                    {/* <h3>Question {currentQuestion + 1} of 5</h3> */}
                    {/* <h2 className="question-text">{exercises.questionHead[currentQuestion]}</h2> */}
                    {/* <h2 className="question-text">test</h2> */}
                    <ul>
                        {/* {exercises.questionHead[currentQuestion].answers.map((answer) => {
                            return(
                                <li onClick={() => answerClicked(answer.valid.true)}>{answer.answerBody}</li>
                            );

                        })} */}

                    </ul>

                </div>
            }

        </div>
    );
}
export default Exercises;