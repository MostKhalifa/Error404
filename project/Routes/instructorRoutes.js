<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const {
    setInstructorCountry
  } = require('../Controller/instructorController')

  router.route('/setCountry/:id').put(setInstructorCountry)

  module.exports = router;
=======
const express = require("express");
const router  = express.Router();
const 
    {
        viewAllInstructorCourses,
        filterInstructorCourses,
        searchInstructorCourses
    }= require("../Controller/instructorController");
router.route("/ViewAllCourses/:id").get(viewAllInstructorCourses);
router.route("/FilterCourses/:id").get(filterInstructorCourses);
router.route("/SearchCourses/:id").get(searchInstructorCourses);

module.exports =router;
>>>>>>> 978144c841dbc5aa814ca69f1b8fc10e09a0b567
