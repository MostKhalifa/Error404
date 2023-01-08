import React, { useEffect, useState } from "react";
import axios from 'axios';
import { set } from "lodash";
  


const AdminHomePage = () => {   
    const [refundRequests , setRefundRequests] = useState(null);
    const [traineeRefundName , setTraineeRefundName] = useState(null);
    const [courseRefunded , setCourseRefunded] = useState(null);

    useEffect(() => {
        (async () => {
            const allreqs = axios.get("/requests/getAllRefundRequest")
            .then((res)=>
            {
                res.data.forEach(async request => {
                    const trainee = await axios.get("/trainee/getIndividualTrainee/" + request.trainee)
                    .then((res)=>{
                        setTraineeRefundName(res.data.username);
                    })
                    const courrse = await axios.get("/course/getCourse?courseId=" + request.course)
                    .then((res)=>{
                        setCourseRefunded(res.data.courseTitle);
                    })
                    if(refundRequests === null){
                        setRefundRequests([traineeRefundName,courseRefunded]);
                        console.log("here");
                    }
                    else{
                        setRefundRequests(refundRequests => [refundRequests] + [traineeRefundName,courseRefunded]);
                        console.log("in elses")
                    }  
                    console.log(refundRequests);
    
                });
            })
          })();
        //For  Refunds


        //For Reports

        //For Access Requests
        
      } , []);


      
    return(
        <>
        {/* <img className= 'w-[440px] h-[440px] object-cover' src='https://i.pinimg.com/550x/a8/23/0a/a8230a2a558297bc90a394ec0283ff4f.jpg' alt=""/> */}


        <div className="relative flex items-center">
            <ul>
                <li>{refundRequests}</li>
            {/* {refundRequests && refundRequests.map((reqs) => {
                return(
                    <li key={reqs.id}>{reqs[0]}</li>
                );
            })} */}
            </ul>

        </div>
        </>
    );
}
export default AdminHomePage;