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
import NavBarTrainee from "./general/assests/navBarTrainee";
import NavBarInstructor from "./general/assests/navBarInstructor";
////import CourseOverView from "./guestViews/courseOverView";
import Profile from "./instructorViews/profile"
import IndvidualTraineeProfile from "./traineeViews/indvidualTraineeProfile";
import CorporateTraineeProfile from "./traineeViews/corporateTraineeProfile";
import AdminHomePage from "./adminViews/homeAdmin";
import RequestARefund from "./traineeViews/RequestARefund";
import ReportAProblem from "./general/ReportAProblem";
import ViewMyReports from "./general/ViewMyReports";
import Footer from "./general/assests/footer";
import AddCorporateTrainee from "./adminViews/addCorporateTrainee";
import AddInstructor from "./adminViews/addInstructor";
import AddAdmin from "./adminViews/addAdmin";
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
              <Route  path="/viewCourse" element={<SignUp/>} />
              <Route  path="/viewCourse" element={<SignUp/>} />

              <Route path="/homePageAdmin" element={<AdminHomePage/>}/>
              <Route path="/addCorporateTrainee" element={<AddCorporateTrainee/>}/>
              <Route path="/addInstructor" element={<AddInstructor/>}/>
              <Route path="/addAdmin" element={<AddAdmin/>}/>

              <Route path="/MakeRefundRequest" element={<RequestARefund/>}/>
              <Route path="/ReportAProblem" element={<ReportAProblem/>}/>
              <Route path="/MyReports" element={<ViewMyReports/>}/>
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
