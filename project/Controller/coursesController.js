const asyncHandler = require('express-async-handler') 
const Courses = require('../Models/Courses')
const mongoose = require('mongoose')

//view course title along with total hours and rating ( requirement 7)
const getCourse = asyncHandler(async(req,res)=>{
    const course = await Courses.find().select('courseTitle numberOfHours reviews');

    res.status(200).json(course);
    
})

//view price of each course (requirement 8)
const viewCoursePrice = asyncHandler(async (req, res) => {
    const course = await Courses.findById(req.params.id)
  
    if (!course) {
      res.status(400)
    }
    const temp = course.price;
    res.status(200).json(temp);
})

//filter course by subject and/or rating
const filterCourseSubjectRating = asyncHandler(async(req,res)=>{
  const {courseSubject} = req.body;
  const {rating} = req.body;
  if(!courseSubject){
    if(!rating){
      const course = await Courses.find({}).select('courseTitle courseSubject chapters price discount')
      res.send(course)
    }
    else{
      const course = await Courses.find({"reviews.rating": rating}).select('courseTitle courseSubject chapters price discount')
      res.send(course)
    }
  }
  else{
    if(!rating){
      const course = await Courses.find({courseSubject: courseSubject}).select('courseTitle courseSubject chapters price discount')
      res.send(course)
    }
    else{
      const course = await Courses.find({courseSubject: courseSubject}, {"reviews.rating": rating}).select('courseTitle courseSubject chapters price discount')
      res.send(course)
    }
  }
  res.status(400).json({error:error.message})
    
})

const filterCoursePrice = asyncHandler(async(req,res)=>{

  const {priceTo,priceFrom} =req.body
  if(!priceFrom && !priceTo){
    const course = await Courses.find({}).select('courseTitle price')
    res.send(course)
  }
  if(!priceFrom || !priceTo){
     res.status(404).send("you didnt enter both fields");    
  }
  else{
    const course = await Courses.find({$and:[{price: {$lte : priceTo}},{price: {$gte : priceFrom}}]} ).select('courseTitle price')
    res.status(200).json(course)

}})

//filter course by subject and/or rating
const searchForCourse = asyncHandler(async(req,res)=>{
 
  const {courseTitle,courseSubject,instructorName} = req.body;

  if(!courseSubject){
    if(!courseTitle){
      if(!instructorName){
        res.status(404).send("you didnt enter fields");
    
        console.log(courseTitle)
      }
      else{
        const course = await Courses.find({"instructor.instructorName":(instructorName)}) 
        res.send(course)
      }
    }
    else{
      const course = await Courses.find({courseTitle: courseTitle})
      res.send(course)
    }
  }
  else{
    const course = await Courses.find({courseSubject: courseSubject})
    res.send(course)
  }
 
 
})


const rateaCourse = asyncHandler(async (req, res) => {
  const courseRate = await Courses.findById(req.params.id)
  req.query.reviewerID
  const {rating}=req.body
  const {review}=req.body
  if (!courseRate) {
    res.status(400).send("course not found!");
  }
  if ((!rating) && (!review)) {
    res.status(400).send("Please fill in the field");
  }
  if (!rating){
    res.status(400).send("Please enter the rating");
  }
  if((!review)){
    const ratedCourse = await Courses.findByIdAndUpdate(req.params.id, 
      {"reviews.rating":rating},
      {"reviews.reviewedBy":req.query.reviewerID},
       {new: true,})
  res.status(200).json(ratedCourse)   
  }
  else{
    const ratedCourse = await Courses.findByIdAndUpdate(req.params.id,
      {"reviews.review":review}, 
      {"reviews.rating":rating},
      {"reviews.reviewedBy":req.query.reviewerID},
       {new: true,})
       res.status(200).json(ratedCourse)   
  }
 })


  module.exports = {
    filterCourseSubjectRating,
    filterCoursePrice,
    getCourse,
    viewCoursePrice,
    searchForCourse,
    rateaCourse,

  }