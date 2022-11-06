const aysncHandler = require('express-async-handler') 
const IndividualTrainee = require('../Models/IndividualTrainee')
const CorporateTrainee = require('../Models/CorporateTrainee')

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


  module.exports = {
    setIndividualIraineeCountry ,
    setCorporateTraineeCountry
  }