import "./assests/button"
import Button from "./assests/button";
import TextBox from "./assests/textbox";
import RadioBox from "./assests/radioBox";
import YoutubeVideo from "./assests/youtubeVideo";
import UploadCourseDescripation from "./instructorViews/uploadCourseDescripation";
import { useState } from "react";
import {FaHome} from "react-icons/fa";
import { Rating,Switch,CircularProgress } from '@mui/material';
function App() 
{
  const [radioBox,setRadioBox]=useState("");
  const [textBox,setTextBox]=useState("");
  return(
      <div className="App">
        <UploadCourseDescripation></UploadCourseDescripation>
        {/* <CircularProgress></CircularProgress>
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