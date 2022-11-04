const express = require('express')
const router = express.Router()

const {
    filterCourseSubject,
    // filterCourseRating,
    // filterCourseSubjectRating,
  } = require('../Controller/coursesController')

  router.route('/filterCourseSubject').get(filterCourseSubject)
//   router.route('/filterCourseRating').get(filterCourseRating)
//   router.route('/filterCourseSubjectRating').get(filterCourseSubjectRating)
  
  module.exports = router
  