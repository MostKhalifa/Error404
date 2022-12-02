const aysncHandler = require('express-async-handler') 
const Courses = require('../Models/Courses')

//view course title along with total hours and rating ( requirement 7)
const getCourse = aysncHandler(async(req,res)=>{
    const course = await Courses.find().select('courseTitle numberOfHours reviews');

    res.status(200).json(course);
    
  })

//view price of each course (requirement 8)
const viewCoursePrice = aysncHandler(async (req, res) => {
    const course = await Courses.findById(req.params.id)
  
    if (!course) {
      res.status(400)
    }
    const temp = course.price;
    res.status(200).json(temp);
  })


const filterCourseSubject = aysncHandler(async(req,res)=>{
    const course = await Courses.find({}).select('courseTitle courseSubject chapters price discount')
    res.send(course)
   //res.status(200).json(course)
})

const filterCourseRating = aysncHandler(async(req,res)=>{
    const course = await Courses.find({}).select(' reviews ')
    res.status(200).json(course)
})
const filterCourseSubjectRating = aysncHandler(async(req,res)=>{
    const course = await Courses.find({}).select('courseTitle courseSubject reviews chapters price discount')
    res.status(200).json(course)
})

const filterCoursePrice = aysncHandler(async(req,res)=>{
    const course = await Courses.find({}).select('courseTitle price chapters discount')
    res.status(200).json(course)
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


  module.exports = {
    filterCourseSubject,
    filterCourseRating,
    filterCourseSubjectRating,
    filterCoursePrice,
    searchForCoursebyTitle,
    searchForCoursebySubject,
    searchForCoursebyInstructor,
    getCourse,
    viewCoursePrice,
    searchForCoursebyInstructor
  }