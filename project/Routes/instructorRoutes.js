const express = require("express");
const router  = express.Router();
const 
    {   setInstructorCountry,
        createNewCourse,
        viewAllInstructorCourses,
        filterInstructorCourses,
        searchInstructorCourses,
        getRating
    }= require("../Controller/instructorController");
router.route('/setCountry/:id').put(setInstructorCountry);
router.route("/ViewAllCourses/:id").get(viewAllInstructorCourses);
router.route("/FilterCourses/:id").get(filterInstructorCourses);
router.route("/SearchCourses/:id").get(searchInstructorCourses);
router.route("/AddCourse/:id").post(createNewCourse);
router.route("/getRating/:id").get(getRating);
module.exports = router;