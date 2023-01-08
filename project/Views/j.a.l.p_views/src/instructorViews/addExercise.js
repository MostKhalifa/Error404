import { useState, useEffect } from "react";
import { Button, TextField, Switch, FormLabel } from "@mui/material";
import "../styling/courseComponent.css";
function AddExercise({ handleClick }) {
  const [questionHead, setQuestionHead] = useState("");
  const [answer1, setAnswer1] = useState({ answerBody: "", valid: true });
  const [answer2, setAnswer2] = useState({ answerBody: "", valid: false });
  const [answer3, setAnswer3] = useState({ answerBody: "", valid: false });
  const [answer4, setAnswer4] = useState({ answerBody: "", valid: false });
  const [resMsg, setResMsg] = useState(null);
  const [disable, setDisable] = useState(false);
  //exercise:[{questionHead:{type:String,required:true,},answers:[{answerBody:{type :String,required:true},valid:{type:Boolean,required:true,default:false}}]}]
  const clickHandler = () => {
    if (questionHead === "") {
      setResMsg("please provide a question head");
      return;
    } else if (
      answer1.answerBody === "" ||
      answer2.answerBody === "" ||
      answer3.answerBody === "" ||
      answer4.answerBody === ""
    ) {
      setResMsg(" please fill four possible choices for the question");
      return;
    } else if (
      answer1.valid === false &&
      answer2.valid === false &&
      answer3.valid === false &&
      answer4.valid === false
    ) {
      setResMsg(" please choose one correct answer");
      return;
    } else {
      handleClick({
        questionHead: questionHead,
        answers: [answer1, answer2, answer3, answer4],
      });
      setResMsg("exercise added");
      return;
    }
  };
  const changeCorrect = (changedElment) => {
    setAnswer1({ answerBody: answer1.answerBody, valid: false });
    setAnswer2({ answerBody: answer1.answerBody, valid: false });
    setAnswer3({ answerBody: answer1.answerBody, valid: false });
    setAnswer4({ answerBody: answer1.answerBody, valid: false });
    switch (changedElment) {
      case 1:
        setAnswer1({ answerBody: answer1.answerBody, valid: true });
        break;
      case 2:
        setAnswer2({ answerBody: answer2.answerBody, valid: true });
        break;
      case 3:
        setAnswer3({ answerBody: answer3.answerBody, valid: true });
        break;
      case 4:
        setAnswer4({ answerBody: answer4.answerBody, valid: true });
        break;
      default:
        setResMsg("some thing went wrong please try again");
    }
  };
  return (
    <div className="courseComponent">
      <p className="UploadCourseDescriptionP">
        please add your question head and answers below
      </p>
      <br />
      <TextField
        onChange={(change) => {
          setQuestionHead(change.target.value);
        }}
        sx={{ marginLeft: "200px", marginBottom: "10px", width: "1000px" }}
        id="exerciseHead"
        label="Question Head"
        size="small"
        helperText="please provide the question Head"
      />
      <br />
      <FormLabel
        sx={{ marginLeft: "240px", marginBottom: "10px", width: "1000px" }}
        id="demo-controlled-radio-buttons-group"
      >
        Answers
      </FormLabel>
      <br />
      <div className="answerField">
        <TextField
          sx={{ width: "1000px" }}
          onChange={(change) => {
            setAnswer1({
              answerBody: change.target.value,
              valid: answer1.valid,
            });
          }}
          label="Answer 1"
          size="small"
          helperText="please provide the first Answer"
        />
        <Switch
          checked={answer1.valid}
          onChange={() => {
            changeCorrect(1);
          }}
        ></Switch>
      </div>
      <div className="answerField">
        <TextField
          sx={{ width: "1000px" }}
          onChange={(change) => {
            setAnswer2({
              answerBody: change.target.value,
              valid: answer2.valid,
            });
          }}
          label="Answer 2"
          size="small"
          helperText="please provide the second Answer"
        />
        <Switch
          checked={answer2.valid}
          onChange={() => {
            changeCorrect(2);
          }}
        ></Switch>
      </div>
      <div className="answerField">
        <TextField
          sx={{ width: "1000px" }}
          onChange={(change) => {
            setAnswer3({
              answerBody: change.target.value,
              valid: answer3.valid,
            });
          }}
          label="Answer 3"
          size="small"
          helperText="please provide the third Answer"
        />
        <Switch
          checked={answer3.valid}
          onChange={() => {
            changeCorrect(3);
          }}
        ></Switch>
      </div>
      <div className="answerField">
        <TextField
          sx={{ width: "1000px" }}
          onChange={(change) => {
            setAnswer4({
              answerBody: change.target.value,
              valid: answer4.valid,
            });
          }}
          label="Answer 4"
          size="small"
          helperText="please provide the fourth Answer"
        />
        <Switch
          checked={answer4.valid}
          onChange={() => {
            changeCorrect(4);
          }}
        ></Switch>
      </div>
      <Button
        onClick={() => {
          clickHandler();
        }}
        sx={{ marginBottom: "10px", marginLeft: "1200px" }}
        variant="contained"
      >
        Add Question
      </Button>
      {resMsg && <p className="UploadCourseDescriptionP">{resMsg}</p>}
    </div>
  );
}
export default AddExercise;
