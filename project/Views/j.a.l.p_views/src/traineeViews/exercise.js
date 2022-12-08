import React, { useState } from "react";
import "./traineeViews.css"
// //import ResponsiveAppBar from "./ResponsiveAppBar";
// import {useNavigate} from "react-router-dom";
// import { useState } from "react";
// //import Quest from "../sources/quiz.json";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// import { ClassNames } from "@emotion/react";
// //import { makeStyles } from "@material-ui/core/styles";

// const Exercise = () => {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [chosenAnswer, setChosenAnswer] = useState("");
//     const [score, setScore] = useState(0);
//     const [end, setEnd] = useState(false);
//     const [clickedAnswer, setClickedAnswer] = useState(false);

//     const checkAnswer = (answer) => {
//         setChosenAnswer(answer);
//         setClickedAnswer(true);
//       };
// }
// //export default Exercise;

const Exercises = () => {

    const [showResult, setShowResult] = useState(false);
    const [score , setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);


    return (
        <div className="Exercises">
            <h1>Exercise of something</h1>

            {showResult ?
                <div className="exercise-result">
                    <h1> Result</h1>
                    <h2> {score} of x questions correct - (x%)</h2>
                    <p></p>
                    <button> Retake quiz</button>
                    <button> Return to course</button>
                </div>
                :
                <div className="questions-card">
                    {/* get questions from database so still needs some work on questions.length */}
                    {/* <h3>Question {currentQuestion + 1} of {questions.length}</h3> */}
                    <h3>Question {currentQuestion + 1} of x (placeholder)</h3>
                    <h2 className="question-text">question here</h2>
                    <ul>
                        <li>answer 1</li>
                        <li>answer 2</li>
                        <li>answer 3</li>
                        <li>answer 4</li>
                    </ul>

                </div>
            }



        </div>
    );
}
export default Exercises;