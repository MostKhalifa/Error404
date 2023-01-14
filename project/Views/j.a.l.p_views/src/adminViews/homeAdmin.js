import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import NavBarAdmin from "../general/assests/navBarAdmin"
import Footer from "../general/assests/footer";
  


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
            {   //console.log(res);
                for(let i=0 ; i<res.data.length-1 ; i++){
                    const reviewId = res.data[i]._id;
                    const traineeId = res.data[i].trainee;
                    const courseId = res.data[i].course;
                    //console.log(reviewId);
                    axios.get("/trainee/getIndividualTrainee/" + traineeId)
                    .then((result)=>{
                        user.push(result.data.username);
                        //console.log(i);
                        console.log(user);
                    })
                }
            })

        //For Reports

        //For Access Requests
        
      } , []);

    return(      


            <Fragment>
            <NavBarAdmin></NavBarAdmin>

            {/*
            <div className="content">
            <CourseDrawer  title="popular courses" courses={popularCourses}/>
            <CourseDrawer title="on discount" courses={onDiscount}/> */}
            <Footer></Footer>
        </Fragment>    
    );
}
export default AdminHomePage;