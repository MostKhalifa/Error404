const aysncHandler = require('express-async-handler') 
const IndividualTrainee = require('../Models/IndividualTrainee')
const CorporateTrainee = require('../Models/CorporateTrainee')
const Courses = require('../Models/Courses')

// individual Trainee can select his/her country (requirement 6)
// add the individual Trainee id with the url to change the country of a certain individual Trainee
const setIndividualIraineeCountry = aysncHandler(async (req, res) => {
    const trainee = await IndividualTrainee.findById(req.params.id)
  
    if (!trainee) {
      res.status(400)
    }
  
    const updatedtrainee = await IndividualTrainee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(updatedtrainee)
  })

 // Coorporate Trainee can select his/her country (requirement 6)
// add the individual Trainee id with the url to change the country of a certain individual Trainee
const setCorporateTraineeCountry = aysncHandler(async (req, res) => {
  console.log("testttttttttttt")
  console.log(req.body)
    const trainee = await CorporateTrainee.findById(req.params.id)
  
    if (!trainee) {
      res.status(400)
    }
    const updatedtrainee = await CorporateTrainee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    console.log("testttttttttttt")
    console.log(req.body)
    res.status(200).json(updatedtrainee)
  })


  //Indvidual trainee can open all the items inside a course he/she is registered for including video and excericies 
  // since a trainee could have more than one course , so I want to retrive the info of the specific course that he/she wants 
  // Hence I need both trainee id and course id 
  // the question is for the same course it will apeear similarly for all enrolled trainees ??
  // Also I need to esnure that they are viewing the courses that they are registered in
  const getIndividualIraineeCourseInfo = aysncHandler(async (req, res) => {
    const trainee = await IndividualTrainee.findById(req.params.id)
    console.log(trainee)
    if (!trainee ) {
      res.status(400)
    }
    const course = await Courses.findById(req.query.id1).select('courseTitle numberOfHours reviews certifcateForm courseSubject discount instructors reviews chapters');
    // console.log(course)
    // if(!course){
    //   res.status(400)
    // }
    // // if(!trainee.courses.findById(req.parameter.id2)){
    // //   throw new Error("You are Not registered to this Course")
    // // }
    //  else{
    // result = course.select('courseTitle numberOfHours reviews certifcateForm courseSubject discount instructors reviews chapters');
    res.status(200).json(course)
     
  })


  //Corporate trainee can open all the items inside a course he/she is registered for including video and excericies 

  const getCorporateIraineeCourseInfo = aysncHandler(async (req, res) => {
    const trainee = await CorporateTrainee.findById(req.params.id)
    if (!trainee ) {
      res.status(400)
    }
    console.log(trainee.courses[0][0]);
    const course = await Courses.findById(req.parameter.id2)
    if(!course){
      res.status(400)
    }
    if(!trainee.courses.findById(req.parameter.id2)){
      throw new Error("You are Not registered to this Course")
    }
    else{
    course = await Courses.findById(req.parameter.id2).select('courseTitle numberOfHours reviews certifcateForm courseSubject discount instructors reviews chapters');
    res.status(200).json(course)
    }
  })



  module.exports = {
    setIndividualIraineeCountry ,
    setCorporateTraineeCountry,
    getIndividualIraineeCourseInfo,
    getCorporateIraineeCourseInfo
  }