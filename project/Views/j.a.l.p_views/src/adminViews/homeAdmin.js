import React, { useEffect, useState } from "react";
import axios from 'axios';
import CourseCard from "../general/assests/courseCard";
const AdminHomePage = () => {   
    const [refundRequests , setRefundRequests] = useState({username:null , coursename:null, courseprice:null});
    const [username , setUserName] = useState(null);

    let user = [];
    let course = [];
    let price = [];
    let sum =[];
    let [requests,setRequests]=useState([]); 

    let trial = [];

    useEffect(() => {
        //For  Refunds
            const allreqs = axios.get("/requests/getAllRefundRequest")
            .then((res)=>
            {   console.log(res.data);
                for(let i=0 ; i<res.data.length ; i++){
                    const reviewId = res.data[i]._id;
                    const traineeId = res.data[i].trainee;
                    const courseId = res.data[i].course;
                    //console.log(reviewId);
                    axios.get("/trainee/getIndividualTrainee/" + traineeId)
                    .then((result)=>{
                        user.push(result.data.username);
                        //console.log(i);
                        //console.log(user);
                    })
                // console.log(user);
                }
                // setRequests(res.data);
            })

        //For Reports

        //For Access Requests
        
      } , []);

    /* useEffect(() => {

        for(const reqs of requests){
            const reviewId = reqs.id;
            const traineeId = reqs.trainee;
            const courseId = reqs.course;
            axios.get("/trainee/getIndividualTrainee/" + traineeId)
            .then((res)=>{
                user.push(res.data.username);
            })
            

        }
         console.log(user); */

        // requests.forEach(async (request)=>{
        //     await axios.get("/trainee/getIndividualTrainee/" + request.trainee)
        //     .then((res)=>{
        //         user.push(res.data.username);
        //     })
        //     await axios.get("/course/getCourse?courseId=" + request.course)
        //     .then((res)=>{
        //         course.push(res.data.courseTitle);
        //         price.push(res.data.price);
        //     })
        // })
         //console.log(user);
        // console.log(cour);
        //setRefundRequests({username:user,coursename:course,courseprice:price});
       //console.log(requests);
          /////////////  //  } , [requests]);


    // const getTrainee =  async (traineeID) => {
    //         await axios.get("/trainee/getIndividualTrainee/" + traineeID).then((res) =>{
    //         // return res.data.username;   
    //         //console.log(res.data.username);             
    //         return res.data.username;
    //     })
    //     };


        //, getTrainee("63665a860a6c1686a07f7e28")
            
    return(      
        <div className="relative flex items-center">
       {/* <button onClick={() => {console.log(refundRequests, getTrainee("63665a860a6c1686a07f7e28") )}}></button> */}
            {/* {requests?.map((reqs) => {
                return(
                    // <li key={reqs.id}>{console.log(getTrainee(reqs.trainee))}</li>
                    <li key={reqs.id}>{reqs}</li>
                );
            })} */}
        </div>     
    );
}
export default AdminHomePage;