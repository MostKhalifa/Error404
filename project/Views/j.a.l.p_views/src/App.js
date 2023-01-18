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
//import CourseOverView from "./guestViews/courseOverView";
import Profile from "./instructorViews/profile"
import IndvidualTraineeProfile from "./traineeViews/indvidualTraineeProfile";
import CorporateTraineeProfile from "./traineeViews/corporateTraineeProfile";
import AdminHomePage from "./adminViews/homeAdmin";
import ReportAProblem from "./general/ReportAProblem";
import ViewMyReports from "./general/ViewMyReports";
import TraineeFirstPage from "./traineeViews/traineeFirstPage";
import ITPayment from "./traineeViews/iTPayment";
import MyChapters from "./traineeViews/myChapters";
import MyChapterInfo from "./traineeViews/myChapterInfo";
import TraineeCourse from "./traineeViews/traineeCourse";
import RequestARefund from "./traineeViews/RequestARefund";
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
              <Route path="/homePageAdmin" element={<AdminHomePage/>}/>
              {/* <Route path="/MakeRefundRequest" element={<RequestARefund/>}/> */}
              {/* <Route path="/ReportAProblem" element={<ReportAProblem/>}/> */}
              <Route path="/:userType/:userId/reportAProblem/" element={<ReportAProblem/>}/>
              {/* <Route path="/MyReports" element={<ViewMyReports/>}/> */}
              <Route path="/MyReports/:userid" element={<ViewMyReports/>}/>
              <Route path="/InstructorProfile" element={<Profile />} />

              <Route path="/ItraineeProfile" element={<IndvidualTraineeProfile />} />
              <Route path="/CtraineeProfile" element={<CorporateTraineeProfile />} />
              <Route path="/navbarinstructor" element={<NavBarInstructor />} />
              <Route path="/navbartrainee" element={<NavBarTrainee />} />
              <Route path="/:userType/:userId/viewCourse/:courseid" element={<CourseOverView/>} />
              
              <Route path="/:userType/:traineeId" element={<TraineeFirstPage />} />
              <Route path="/viewCourse" element={<CourseOverView />} />
              <Route path="/Payment/:userId/:courseid" element={<ITPayment />} />
              <Route path="/:userType/:userId/chapters/:courseid" element={<MyChapters />} />
              <Route path="/chapterInfo" element={<MyChapterInfo />} />
              <Route path="/:userType/:userId/traineeCourse/:courseid" element={<TraineeCourse />} />
              <Route path="/:userType/:userId/refund/:courseid" element={<RequestARefund />} />
            </Routes>
          </div>
          
        </Router>
      }
    </div>
  );
}
export default App;
