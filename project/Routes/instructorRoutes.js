const express = require("express");
const router  = express.Router();
const 
    {   setInstructorCountry,
        createNewCourse,
        viewAllInstructorCourses,
        filterInstructorCourses,
        searchInstructorCourses,
        getInstructorCourseRatings,
        setInstructorCourseVideoandDescription,
        setInstructor
    }= require("../Controller/instructorController");
router.route('/setCountry/:id').put(setInstructorCountry);
router.route("/ViewAllCourses/:id").get(viewAllInstructorCourses);
router.route("/FilterCourses/:id").get(filterInstructorCourses);
router.route("/SearchCourses/:id").get(searchInstructorCourses);
router.route("/AddCourse/:id").post(createNewCourse);
router.route('/viewCourseReviews/:id').get(getInstructorCourseRatings);
router.route('/UploadCourseVideoAndDescription/:id').put(setInstructorCourseVideoandDescription);
router.route('/setIII').post(setInstructor);

module.exports = router;