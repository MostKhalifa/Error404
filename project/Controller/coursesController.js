const aysncHandler = require('express-async-handler'); 
const { default: mongoose } = require('mongoose');
const moongoose = require('moongoose');
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

const updateCourseDescription = aysncHandler(async (req,res)=>
{
  const courseId= req.params.id;
  if(!mongoose.Types.ObjectId.isValid(courseId))
  {
    res.status(404).send("the course id given is in an invalid form");
  }
  const courseDescription= req.body.courseDescription;
  const courseDescriptionVideo=req.body.courseDescriptionVideo;
  if((await Courses.find({_id:courseId})).length!=0)
  {
    await Courses.findByIdAndUpdate(req.params.id,{courseDescription:req.body.courseDescription,courseDescriptionVideo:req.body.src});
    res.status(200).send({id:req.params.id,courseDescription:req.body.courseDescription,src:req.body.src});
  }
  else
  {
    res.status(404).send("no course with the id :" +courseId+" was found");
  }
})
const getCourseDescription =aysncHandler(async(req,res)=>{
  const courseId= req.params.id;
  if(!mongoose.Types.ObjectId.isValid(courseId))
  {
    res.status(404).send("the course id given is in an invalid form");
  }
  const course = await Courses.find({_id:courseId},{courseDescription:1,courseDescriptionVideo:1});
  if(course.length==0)
  {
    res.status(404).send("the course id :"+courseId+"doesnt exist")
  }
  res.status(200).send(course);  
})

  module.exports = 
  {
    filterCourseSubject,
    filterCourseRating,
    filterCourseSubjectRating,
    filterCoursePrice,
    searchForCoursebyTitle,
    searchForCoursebySubject,
    searchForCoursebyInstructor,
    getCourse,
    viewCoursePrice,
    searchForCoursebyInstructor,
    updateCourseDescription,
    getCourseDescription
  }