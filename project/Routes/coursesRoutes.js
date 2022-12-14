const express = require('express')
const router = express.Router()

const {
    getCourse,
    viewCoursePrice,
    filterCourseSubjectRating,
    filterCoursePrice,
    searchForCourse,
    rateaCourse,

  } = require('../Controller/coursesController')

  router.route('/getCourses').get(getCourse)
  router.route('/getCoursePrice/:id').get(viewCoursePrice)
  router.route('/filterCourseSubjectRating').get(filterCourseSubjectRating)
  router.route('/filterCoursePrice').get(filterCoursePrice)
  router.route('/searchForCourse').get(searchForCourse)
  router.route('/rateaCourse/:id').put(rateaCourse)
 

   
  module.exports = router