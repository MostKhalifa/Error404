const express = require('express')
const router = express.Router()
const {
    setInstructorCountry
  } = require('../Controller/instructorController')

  router.route('/setCountry/:id').put(setInstructorCountry)

  module.exports = router;