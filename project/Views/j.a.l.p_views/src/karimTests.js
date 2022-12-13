import UpdateCourseDescription from "./instructorViews/updateCourseDescription";
import UploadCourseDescription from "./instructorViews/uploadCourseDescription";
import {useState } from "react";
import YoutubeVideo from "./assests/youtubeVideo";
import AddExercise from "./instructorViews/addExercise"
import ViewRating from "./instructorViews/viewRating"
function KarimTests() 
{
  const [exercises,SetExercises]=useState([])
  const [src,setSrc]=useState("");
  const [courseDescription,setCourseDescription]=useState("");
  const handleClick = (courseDescription,src)=>
  {
    setCourseDescription(courseDescription)
    setSrc(src);
  }
  const handleClickAddExcersie = (exercise)=>
  {
    exercises.push(exercise);
    SetExercises(exercises);
    window.location.reload(false)
    console.log(exercises)
  }
  return(
      <div className="App">
        <ViewRating instructorId={"63653e09c81ff58c1c877e6d"}></ViewRating>
        <AddExercise handleClick={handleClickAddExcersie}></AddExercise>
        <UpdateCourseDescription courseId={"639114e227ba150662d88096"}></UpdateCourseDescription>
        <UploadCourseDescription handleClick={handleClick}></UploadCourseDescription>
        {src&&<YoutubeVideo src={src} width="1000" height="600"></YoutubeVideo>}
        <h1>{src}</h1>
        <h1>{courseDescription}</h1>
      </div>
  );
}
export default KarimTests;