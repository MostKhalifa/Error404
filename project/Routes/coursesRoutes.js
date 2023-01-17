const express = require("express");
const router = express.Router();

const {
  getCourses,
  getCourse,
  viewCoursePrice,
  filterCourseSubjectRating,
  filterCoursePrice,
  searchForCourse,
  rateaCourse,
  updateCourseDescription,
  getCourseDescription,
  getCourseChapter,
  getCourseReviews,
  getDiscountCourses,
  getPopularCourses
} = require("../Controller/coursesController");
router.route("/getCourse").get(getCourse);
router.route("/popularCourses").get(getPopularCourses);
router.route("/discountCourses").get(getDiscountCourses);
router.route("/getCourseReviews").get(getCourseReviews);
router.route("/getCourses").get(getCourses);
router.route("/getCoursePrice/:id").get(viewCoursePrice);

router.route("/filterCourseSubjectRating").post(filterCourseSubjectRating);
router.route("/filterCoursePrice").post(filterCoursePrice);

router.route("/searchForCourse").post(searchForCourse);
router.route("/rateaCourse/:id").put(rateaCourse);
router.route("/updateCourseDescription/:id").patch(updateCourseDescription);
router.route("/getCoursesChapter/:id").get(getCourseChapter);

router.route("/getCourseDescription/:id").get(getCourseDescription);
module.exports = router;
