const express = require('express')
const router = express.Router()
const {
    setIndividualIraineeCountry ,
    setCorporateTraineeCountry,
    getIndividualIraineeCourseInfo,
    getCorporateIraineeCourseInfo
  } = require('../Controller/traineeController')

  router.route('/IndividualTrainee/setCountry/:id').put(setIndividualIraineeCountry)
  router.route('/CorporateTrainee/setCountry/:id').put(setCorporateTraineeCountry)
  router.route('/IndividualTrainee/viewCourseInfo/:id').get(getIndividualIraineeCourseInfo)
  router.route('/CorporateTrainee/viewCourseInfo/:id').get(getCorporateIraineeCourseInfo)

  module.exports = router;