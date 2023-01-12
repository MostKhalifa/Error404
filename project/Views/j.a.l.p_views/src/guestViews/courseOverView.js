import { Fragment, useState, useEffect } from "react";
import {Button,Rating,Divider} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styling/courseOverView.css"
import CourseReviews from "../general/assests/courseReviews";
import YoutubeVideo from "../general/assests/youtubeVideo";

function CourseOverView() {
    const courseId =window.location.href.split("?courseId=")[1];
    const [course,setCourse]=useState(null);
    const [errMsg,setErrMsg]=useState("");
    const [overAllRating, setOverAllRating] = useState(0);
    const [numberOfReviews, setNumberOfReviews] = useState(0);
    const navigate= useNavigate();
    useEffect(()=>{
        axios.get("/course/getCourse?courseId="+courseId)
        .then(
                (res)=>
                {
                    setCourse(res.data);
                    setNumberOfReviews(res.data.reviews.length)
                    let averageRarting = 0;
                    res.data.reviews.forEach((review) => {averageRarting += review.rating;});   
                    setOverAllRating(Math.floor((averageRarting / res.data.reviews.length) * 10)/ 10);
                }
             )
        .catch((res)=>{setErrMsg(res.response.data)});   
    },[])
    const handleClick= ()=>{
        navigate("/viewCourse?courseId="+course._id);
    }
    return (
        
        <Fragment>
            
            {course&&<Fragment>
                <div style={{display:"flex",width:"97vw",marginBottom:"1vh"}}><h1 className="courseTitle" >{course.courseTitle} </h1><Button style={{marginTop:"5px",marginRight:"10px",width:"20vw"}} variant="contained">enroll now</Button></div>
                <YoutubeVideo  src={course.courseDescriptionVideo} height={"50"} width={"97"} marginValue ={"1.5"}title={course.courseTitle+" DescriptionVideo"}/>
                <div className="courseOverView">
                    <div className="courseDescripation">
                        <h1>course Description</h1>
                        <p>{course.courseDescription}</p>
                    </div>
                    <div className="courseDetails">
                    <h1>important info</h1>
                        <p><b>by:</b>{course.instructor.instructorName}</p>
                        {(!course.discount.avaliable)?<p><b>price:</b>{course.price} coin</p>:<p><b>price:</b><s >{course.price}</s> <b style={{color:"#ff0000"}}>{(!(course.discount.percentage===1))?(course.price-course.price*course.discount.percentage):"free"}</b></p>}
                        <p><b>number of hours:</b>{course.numberOfHours}</p>
                        <b style={{alignSelf:"center"}}>rating: </b>
                        <Rating  name="CourseRating" value={overAllRating} precision={0.1} readOnly/><br/><br/>
                        <b>{overAllRating} out of 5 stars </b>
                        
                    </div>
                </div>
                <CourseReviews courseId={courseId} />
                </Fragment>
            }
            {!course&&<h1>{errMsg} </h1>}
        </Fragment>
            
    );
  }
  export default CourseOverView;