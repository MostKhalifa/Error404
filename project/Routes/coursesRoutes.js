const express = require('express')
const router = express.Router()
const {
    getCourse,
    viewCoursePrice,
  } = require('../Controller/coursesController')

  router.route('/getCourses').get(getCourse)
  router.route('/getCoursePrice/:id').get(viewCoursePrice)

  module.exports = router;