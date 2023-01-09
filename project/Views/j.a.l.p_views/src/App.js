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
import AdminHomePage from "./adminViews/homeAdmin";
import RequestARefund from "./traineeViews/RequestARefund";
import ReportAProblem from "./general/ReportAProblem";
import ViewMyReports from "./general/ViewMyReports";
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
              <Route  path="/viewCourse" element={<SignUp/>} />
              <Route path="/homePageAdmin" element={<AdminHomePage/>}/>
              <Route path="/MakeRefundRequest" element={<RequestARefund/>}/>
              <Route path="/ReportAProblem" element={<ReportAProblem/>}/>
              <Route path="/MyReports" element={<ViewMyReports/>}/>

            </Routes>
          </div>
        </Router>
      }
    </div>
  );
}
export default App;
