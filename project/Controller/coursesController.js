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
//Searching By Title
const searchForCoursebyTitle = aysncHandler(async(req,res)=>{
  const {courseTitle} = req.body;
  if(!courseTitle)
    res.status(400).json({error:error.message})
  const course = await Courses.find({courseTitle: courseTitle}).select('courseTitle courseSubject chapters price discount')
  return res.status(200).json(course)
})
//Searching By Subject
const searchForCoursebySubject = aysncHandler(async(req,res)=>{
  const {courseSubject} = req.body;
  if(!courseSubject)
    res.status(400).json({error:error.message})
  const course = await Courses.find({courseSubject: courseSubject}).select('courseTitle courseSubject chapters price discount')
  return res.status(200).json(course)
})
//Searching By Instructor
const searchForCoursebyInstructor = aysncHandler(async(req,res)=>{
  const {instructors} = req.body;
  if(!instructors)
    res.status(400).json({error:error.message})
  const course = await Courses.find({instructors: instructors}).select('courseTitle courseSubject instructors chapters price discount')
  return res.status(200).json(course)
})


  module.exports = 
  {
    filterCourseSubjectRating,
    filterCoursePrice,
    getCourse,
    viewCoursePrice,
    searchForCourse,
    rateaCourse,

    updateCourseDescription,
    getCourseDescription
  }