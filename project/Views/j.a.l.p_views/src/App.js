
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import UploadCourseDescription from "./pages/UploadCourseDescription";
import InstructorCourses from "./pages/InstructorCourses";
import CTcourseInfo from "./pages/CTcourseInfo";
import UpdateCourseDescription from "./pages/UpdateCourseDescription";
import KarimTests from "./karimTests"
import Exercises from './traineeViews/exercise';
import Certificates from './traineeViews/certificates';

function App() 
{
 
  return(
      <div className="App">
        {
        <Router>
        <div className='container'>
          <Routes>
          <Route path='/CTcourseInfo' element={<CTcourseInfo/>}/>
          <Route path='/ViewInstructorRatingsonCourses' element={<InstructorCourses/>}/>
          <Route path='/uploadLinkAndDescription' element={<UploadCourseDescription/>}/>
          <Route path='/updateLinkAndDescription' element={<UpdateCourseDescription />}/>
          <Route path='/karimTests' element={<KarimTests />}/>
          <Route path='/exercise' element={<Exercises/>}/>
          <Route path='/certificates' element={<Certificates/>}/>
        </Routes>
        </div>
      </Router>
        
        
        
        
        /* <CircularProgress></CircularProgress>
        <YoutubeVideo src={"lDjZA0wodGQ"} width={"300"} height={"300"} title={"video"}></YoutubeVideo>
        <Switch className="test" defaultChecked={true}></Switch>
        <Switch className="test"></Switch>
        <Switch className="test" defaultChecked={true}></Switch>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <Button type="primary" disable = {false} content="primaryEnabledButton" onClickfunction={()=>{console.log("primaryEnabeledButton")}}/>
        <TextBox classType="normal" inputType="text" content="textbox" disable={false} helpertext="helpertext"icon={<FaHome/>}handler={(change)=>setTextBox(change.target.value)}/>
        <label>{textBox}</label>
        <br/>
        <Button type="primary" disable = {true} content="primaryDisabledButton"/>
        <br/>
        <Button type="secondary" disable = {false} onClickfunction={()=>{console.log("secondaryEnabeledButton")}} content="secondaryEnabledButton"/>
        <br/>
        <Button type="secondary" disable = {true} content="secondaryDisabledButton"/>
        <br/>
        <Button type="icon" disable = {false} onClickfunction={()=>{console.log("iconEnabeledButton")}} icon={<FaHome/>}/>
        <br/>
        <Button type="icon" disable = {true} icon={<FaHome/>}/>  
        <br/>
        <RadioBox options={["karim","omar"]} groupname="brothers"  handler={(change)=>setRadioBox(change.target.value)}/>
        <br/>
        <label>{radioBox}</label> */}
      </div>
  );
}
export default App;