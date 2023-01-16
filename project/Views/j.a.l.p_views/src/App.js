import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadCourseDescription from "./pages/UploadCourseDescription";
import InstructorCourses from "./pages/InstructorCourses";
import CTcourseInfo from "./pages/CTcourseInfo";
import UpdateCourseDescription from "./pages/UpdateCourseDescription";
import KarimTests from "./karimTests";
import Exercises from "./traineeViews/exercise";
import Login from "./general/login";
import ForgetPassword from "./general/forgetPassword";
import SignUp from "./general/signup";

import NavBarTrainee from "./general/assests/navBarTrainee";
import NavBarInstructor from "./general/assests/navBarInstructor";
import CourseOverView from "./guestViews/courseOverView";
import Profile from "./instructorViews/profile"
import IndvidualTraineeProfile from "./traineeViews/indvidualTraineeProfile";
import CorporateTraineeProfile from "./traineeViews/corporateTraineeProfile";
import TraineeFirstPage from "./traineeViews/traineeFirstPage";
import ITPayment from "./traineeViews/iTPayment";
function App() {
  return (
    <div className="App">
      {
        <Router>
          <div className="container">
            <Routes>
              <Route path="/CTcourseInfo" element={<CTcourseInfo />} />
              <Route
                path="/ViewInstructorRatingsonCourses"
                element={<InstructorCourses />}
              />
              <Route
                path="/uploadLinkAndDescription"
                element={<UploadCourseDescription />}
              />
              <Route
                path="/updateLinkAndDescription"
                element={<UpdateCourseDescription />}
              />
              <Route path="/karimTests" element={<KarimTests />} />
              <Route path="/exercise" element={<Exercises />} />
              <Route  path="/" element={<Login />} />
              <Route  path="/forgetPassword" element={<ForgetPassword/>} />
              <Route  path="/signup" element={<SignUp/>} />
              <Route path="/InstructorProfile" element={<Profile />} />

              <Route path="/ItraineeProfile" element={<IndvidualTraineeProfile />} />
              <Route path="/CtraineeProfile" element={<CorporateTraineeProfile />} />
              <Route path="/navbarinstructor" element={<NavBarInstructor />} />
              <Route path="/navbartrainee" element={<NavBarTrainee />} />
              <Route path="/IT" element={<TraineeFirstPage />} />
              <Route path="/viewCourse" element={<CourseOverView />} />
              <Route path="/Payment" element={<ITPayment />} />
            </Routes>
          </div>
        </Router>
      }
    </div>
  );
}
export default App;
