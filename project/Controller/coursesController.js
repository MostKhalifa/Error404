// Filter courses based on price
const aysncHandler = require('express-async-handler') 
const Courses = require('../Models/Courses')


const filterCourseSubject = aysncHandler(async(req,res)=>{
    const projection = { _id: 0, CourseTitle: 1, CourseSubject: 1 };
    const course = Courses.find().Course(projection);
    await cursor.forEach(console.dir);
    res.status(200).json(user)

  })

  module.exports = {
    filterCourseSubject
   
  }