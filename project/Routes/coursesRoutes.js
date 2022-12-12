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
    getCourseChapter
  } = require('../Controller/coursesController')

  router.route('/getCoursesChapter/:id').get(getCourseChapter)
  router.route('/getCourses').get(getCourse)
  router.route('/getCoursePrice/:id').get(viewCoursePrice)
  router.route('/filterCourseSubject').get(filterCourseSubject)
  router.route('/filterCourseRating').get(filterCourseRating)
  router.route('/filterCourseSubjectRating').get(filterCourseSubjectRating)
  router.route('/filterCoursePrice').get(filterCoursePrice)
  router.route('/searchForCoursebyTitle').post(searchForCoursebyTitle)
  router.route('/searchForCoursebySubject').post(searchForCoursebySubject)
  router.route('/searchForCoursebyInstructor').post(searchForCoursebyInstructor)

   
  module.exports = router