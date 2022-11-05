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
  }