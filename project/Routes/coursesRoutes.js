const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const {
    getCourse,
    viewCoursePrice,
  } = require('../Controller/coursesController')

  router.route('/getCourses').get(getCourse)
  router.route('/getCoursePrice/:id').get(viewCoursePrice)

  module.exports = router;
=======

const {
    filterCourseSubject,
    filterCourseRating,
    filterCourseSubjectRating,
    filterCoursePrice,
    searchForCoursebyTitle,
    searchForCoursebySubject,
    searchForCoursebyInstructor
  } = require('../Controller/coursesController')

   router.route('/filterCourseSubject').get(filterCourseSubject)
   router.route('/filterCourseRating').get(filterCourseRating)
   router.route('/filterCourseSubjectRating').get(filterCourseSubjectRating)
   router.route('/filterCoursePrice').get(filterCoursePrice)
   router.route('/searchForCoursebyTitle').post(searchForCoursebyTitle)
   router.route('/searchForCoursebySubject').post(searchForCoursebySubject)
   router.route('/searchForCoursebyInstructor').post(searchForCoursebyInstructor)

   

  
  module.exports = router
  
>>>>>>> 978144c841dbc5aa814ca69f1b8fc10e09a0b567
