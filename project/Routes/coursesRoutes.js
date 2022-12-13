const express = require('express')
const router = express.Router()

const {
    getCourse,
    viewCoursePrice,
    filterCourseSubject,
    filterCourseRating,
    filterCourseSubjectRating,
    filterCoursePrice,
    searchForCoursebyTitle,
    searchForCoursebySubject,
    searchForCoursebyInstructor,
    updateCourseDescription,
    getCourseDescription
  } = require('../Controller/coursesController')

  router.route('/getCourses').get(getCourse)
  router.route('/getCoursePrice/:id').get(viewCoursePrice)
  router.route('/filterCourseSubject').get(filterCourseSubject)
  router.route('/filterCourseRating').get(filterCourseRating)
  router.route('/filterCourseSubjectRating').get(filterCourseSubjectRating)
  router.route('/filterCoursePrice').get(filterCoursePrice)
  router.route('/searchForCoursebyTitle').post(searchForCoursebyTitle)
  router.route('/searchForCoursebySubject').post(searchForCoursebySubject)
  router.route('/searchForCoursebyInstructor').post(searchForCoursebyInstructor)
  router.route('/updateCourseDescription/:id').patch(updateCourseDescription)
  router.route('/getCourseDescription/:id').get(getCourseDescription)
  module.exports = router