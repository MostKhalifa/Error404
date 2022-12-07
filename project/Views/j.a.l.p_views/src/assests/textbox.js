import "../styling/textboxes.css"
import {useState}from 'react'
import{FaInfoCircle} from 'react-icons/fa'
function TextBox ({classType,inputType,id,disable,content,icon,helpertext,handler})
{
    const[helperFlag,setHelperFlag]=useState(false);
    return (
        <div className="textBoxDiv">
        <label className="input-label">{content}</label>
        {icon}
        <input className={classType} type={inputType} id={id} disabled={disable} placeholder={content} onChange={handler}/>
        <FaInfoCircle className="info-Circle" onClick={()=>{setHelperFlag(!helperFlag)}}/>
        <br/>   
        {helperFlag&&<label className= "helper-text">{helpertext}</label>}
        </div>
        );     
}
export default  TextBox;