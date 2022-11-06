<<<<<<< HEAD
const aysncHandler = require('express-async-handler') 
const Courses = require('../Models/Courses')

//view course title along with total hours and rating ( requirement 7)
const getCourse = aysncHandler(async(req,res)=>{
    const course = await Courses.find().select('CourseTitle NumberOfHours Reviews');
    const temp = '';
    // for (let i = 0; i < course.length; i++) {
    //     temp += 'Course title: '+course[i].CourseTitle + "<br>"
    //             +'Total Hours: '+course[i].NumberOfHours+ "<br>"
    //             +'Course Review: '+course[i].Reviews+ "<br>" + "<br>";
    //   }

    res.status(200).json(course);
    
  })

//view price of each course (requirement 8)
const viewCoursePrice = aysncHandler(async (req, res) => {
    const course = await Courses.findById(req.params.id)
  
    if (!course) {
      res.status(400)
    }
    const temp = course.Price;
    res.status(200).json(temp);
  })

  

  module.exports = {
    getCourse,
    viewCoursePrice,
=======
const aysncHandler = require('express-async-handler'); 
const Courses = require('../Models/Courses')
//app.use(bodyParser.urlencoded())

const filterCourseSubject = aysncHandler(async(req,res)=>{
    const course = await Courses.find({}).select('CourseTitle CourseSubject chapters Price Discount')
    res.send(course)
   //res.status(200).json(course)
})

const filterCourseRating = aysncHandler(async(req,res)=>{
    const course = await Courses.find({}).select('CourseTitle Reviews chapters Price Discount')
    res.status(200).json(course)
})
const filterCourseSubjectRating = aysncHandler(async(req,res)=>{
    const course = await Courses.find({}).select('CourseTitle CourseSubject Reviews chapters Price Discount')
    res.status(200).json(course)
})

const filterCoursePrice = aysncHandler(async(req,res)=>{
    const course = await Courses.find({}).select('CourseTitle Price chapters Price Discount')
    res.status(200).json(course)
})
//Searching By Title
const searchForCoursebyTitle = aysncHandler(async(req,res)=>{
  const {CourseTitle} = req.body;
  if(!CourseTitle)
    res.status(400).json({error:error.message})
  const course = await Courses.find({CourseTitle: CourseTitle}).select('CourseTitle CourseSubject chapters Price Discount')
  return res.status(200).json(course)
})
//Searching By Subject
const searchForCoursebySubject = aysncHandler(async(req,res)=>{
  const {CourseSubject} = req.body;
  if(!CourseSubject)
    res.status(400).json({error:error.message})
  const course = await Courses.find({CourseSubject: CourseSubject}).select('CourseTitle CourseSubject chapters Price Discount')
  return res.status(200).json(course)
})
//Searching By Instructor
const searchForCoursebyInstructor = aysncHandler(async(req,res)=>{
  const {Instructors} = req.body;
  if(!Instructors)
    res.status(400).json({error:error.message})
  const course = await Courses.find({Instructors: Instructors}).select('CourseTitle CourseSubject Instructors chapters Price Discount')
  return res.status(200).json(course)
})


  module.exports = {
    filterCourseSubject,
    filterCourseRating,
    filterCourseSubjectRating,
    filterCoursePrice,
    searchForCoursebyTitle,
    searchForCoursebySubject,
    searchForCoursebyInstructor
>>>>>>> 978144c841dbc5aa814ca69f1b8fc10e09a0b567
  }