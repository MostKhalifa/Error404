

const aysncHandler = require('express-async-handler') 
const Instructor = require('../Models/InstructorSchema')

// instructor can select his/her country (requirement 6)
// add the instructor id with the url to change the country of a certain instructor
const setInstructorCountry = aysncHandler(async (req, res) => {
    const instructor = await Instructor.findById(req.params.id)
  
    if (!instructor) {
      res.status(400)
    }
  
    const updatedInstructor = await Instructor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(updatedInstructor)
  })

  module.exports = {
    setInstructorCountry
  }