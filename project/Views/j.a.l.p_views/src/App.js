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
import GuestHomePage from "./guestViews/guestHomePage";
import CourseOverView from "./general/assests/courseOverView";

function App() {
  return (
    <div className="App">
      {
        <Router>
          <div className="container">
            <Routes>
              <Route path="/CTcourseInfo" element={<CTcourseInfo />} />
              <Route path="/viewCourse" element={<CourseOverView />} />
              
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
              <Route  path="/forgetPassword" element={<ForgetPassword/>} />
              <Route  path="/signup" element={<SignUp/>} />
              <Route path="/login" element={<Login />}></Route>
              <Route  path="/" element={<GuestHomePage />} />
              
            </Routes>
          </div>
        </Router>
      }
    </div>
  );
}
export default App;
