const express = require("express");
const router  = express.Router();
const 
    {   
        createNewCourse,
        viewAllInstructorCourses,
        filterInstructorCourses,
        searchInstructorCourses
    }= require("../Controller/instructorController");
router.route("/ViewAllCourses/:id").get(viewAllInstructorCourses);
router.route("/FilterCourses/:id").get(filterInstructorCourses);
router.route("/SearchCourses/:id").get(searchInstructorCourses);
router.route("/AddCourse/:id").put(createNewCourse);
module.exports = router;