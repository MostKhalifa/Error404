const express = require("express");
const router = express.Router();

const {
  getCourse,
  viewCoursePrice,
  filterCourseSubjectRating,
  filterCoursePrice,
  searchForCourse,
  rateaCourse,
  updateCourseDescription,
  getCourseDescription,
  getCourseChapter,
  getCourses,
} = require("../Controller/coursesController");

router.route("/getCourses").get(getCourses);
router.route("/getCoursePrice/:id").get(viewCoursePrice);
router.route("/filterCourseSubjectRating").get(filterCourseSubjectRating);
router.route("/filterCoursePrice").get(filterCoursePrice);
router.route("/searchForCourse").get(searchForCourse);
router.route("/rateaCourse/:id").put(rateaCourse);
router.route("/updateCourseDescription/:id").patch(updateCourseDescription);
router.route("/getCoursesChapter/:id").get(getCourseChapter);
router.route("/getCourse").get(getCourse);

router.route("/getCourseDescription/:id").get(getCourseDescription);
module.exports = router;
