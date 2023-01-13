const express = require("express");
const router = express.Router();
const {
  setIndividualIraineeCountry,
  setCorporateTraineeCountry,
  getIndividualIraineeCourseInfo,
  getCorporateIraineeCourseInfo,
  setIndvidualTrainee,
  setCorperateTrainee,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
  getAllTrainees,
  getIndividualIrainee,
  getCorporateIrainee
=======
  changeIndvPassword,
  changeCopPassword
>>>>>>> Stashed changes
=======
=======
>>>>>>> malak-Sprint-3
  changeIndvPassword,
  changeCopPassword,
  getIndvidualTrianeeById,
  getCorporateTrianeeById
<<<<<<< HEAD
>>>>>>> malak-Sprint-3
=======
>>>>>>> malak-Sprint-3
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
router.route("/IndvidualTrainee/changePassword/:id").put(changeIndvPassword);
router.route("/CorpoarateTrainee/changePassword/:id").put(changeCopPassword);
<<<<<<< HEAD
<<<<<<< HEAD
=======
router.route("/IndvidualTrainee/getById/:id").get(getIndvidualTrianeeById);
router.route("/CorpoarateTrainee/getById/:id").get(getCorporateTrianeeById);
>>>>>>> malak-Sprint-3
=======
router.route("/IndvidualTrainee/getById/:id").get(getIndvidualTrianeeById);
router.route("/CorpoarateTrainee/getById/:id").get(getCorporateTrianeeById);
>>>>>>> malak-Sprint-3
module.exports = router;
