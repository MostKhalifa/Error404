const express = require("express");
const router = express.Router();
const {
  setIndividualIraineeCountry,
  setCorporateTraineeCountry,
  getIndividualIraineeCourseInfo,
  getCorporateIraineeCourseInfo,
  setIndvidualTrainee,
  setCorperateTrainee,
  getAllTrainees
} = require("../Controller/traineeController");
router
  .route("/IndividualTrainee/setCountry/:id")
  .put(setIndividualIraineeCountry);
router
  .route("/CorporateTrainee/setCountry/:id")
  .put(setCorporateTraineeCountry);
router
  .route("/IndividualTrainee/viewCourseInfo/:id")
  .get(getIndividualIraineeCourseInfo);
router
  .route("/CorporateTrainee/viewCourseInfo/:id")
  .get(getCorporateIraineeCourseInfo);
router.route("/setI").post(setIndvidualTrainee);
router.route("/setC").post(setCorperateTrainee);

router.route("/getAllTrainees").get(getAllTrainees);
module.exports = router;
