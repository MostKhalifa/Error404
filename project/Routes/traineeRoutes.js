const express = require('express')
const router = express.Router()
const {
    setIndividualIraineeCountry ,
    setCorporateTraineeCountry
  } = require('../Controller/traineeController')

  router.route('/IndividualTrainee/setCountry/:id').put(setIndividualIraineeCountry)
  router.route('/CorporateTrainee/setCountry/:id').put(setCorporateTraineeCountry)

  module.exports = router;