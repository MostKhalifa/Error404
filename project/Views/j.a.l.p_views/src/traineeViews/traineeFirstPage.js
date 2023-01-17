import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseDrawer from "../general/assests/courseDrawer";
import NavBarTrainee from "../general/assests/navBarTrainee";
function TraineeFirstPage (){
    const [traineeInfo, settraineeInfo] = useState(null);

    const courses =["639114e227ba150662d88096",
  "639114e227ba150662d88096",
  "639114e227ba150662d88096",
  "639114e227ba150662d88096",
  "639114e227ba150662d88096",
  "639114e227ba150662d88096",
  "639114e227ba150662d88096",
  "639114e227ba150662d88096",
  "639114e227ba150662d88096",
  "639114e227ba150662d88096",
  "639114e227ba150662d88096"]

    useEffect(() => {
        axios
          .get("/trainee/IndvidualTrainee/getById/63665a860a6c1686a07f7e28")
          .then(function (response) {
            console.log(response);
            settraineeInfo(response);
          });
      }, []);

      return (
        <>
        <div>
          <NavBarTrainee></NavBarTrainee>
        </div>
          <div>
            {
                traineeInfo && 
                <CourseDrawer  title="Popular Courses" courses={courses}/>
            }

          </div>
        </>
      );

}

export default TraineeFirstPage ;
