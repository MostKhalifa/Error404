const express = require("express");
const router = express.Router();
const {
  setInstructorCountry,
  createNewCourse,
  viewAllInstructorCourses,
  filterInstructorCourses,
  rateAnInstructor,
  getRating,
  getInstructorCourseRatings,
  setInstructorCourseVideoandDescription,
  setInstructor,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
  getAllInstructor
=======
  getInstructorById,
  changePassword,
  getamountOwed
>>>>>>> Stashed changes
=======
  getamountOwed,
  getInstructorById,
  changePassword
>>>>>>> malak-Sprint-3
=======
  getamountOwed,
  getInstructorById,
  changePassword
>>>>>>> malak-Sprint-3
} = require("../Controller/instructorController");
router.route("/setCountry/:id").put(setInstructorCountry);
router.route("/ViewAllCourses/:id").get(viewAllInstructorCourses);
router.route("/FilterCourses/:id").get(filterInstructorCourses);
router.route("/AddCourse/:id").post(createNewCourse);
router.route("/viewCourseReviews/:id").get(getInstructorCourseRatings);
router.route("/getall").get(getAllInstructor);
router.route("/UploadCourseVideoAndDescription/:id").put(setInstructorCourseVideoandDescription);
router.route("/setIII").post(setInstructor);
router.route("/rateAnInstructor/:id").put(rateAnInstructor);
router.route("/getRating/:id").get(getRating);
router.route("/getInst/:id").get(getInstructorById);
router.route("/changePassword/:id").put(changePassword);
router.route("/amountOwed/:id").get(getamountOwed);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> malak-Sprint-3
=======

>>>>>>> malak-Sprint-3
module.exports = router;
