import React from "react";
import "../styling/radioBox.css"

function RadioBox({options,groupname,handler}) {
    return (
        <div onChange={(change)=>{handler(change)}}> 
        {options.map(
                    (optionElement)=>(
                        <React.Fragment key ={optionElement}>
                        <input className="radioOption" type="radio" value={optionElement}  name={groupname}  />
                        <label>{optionElement}</label>
                        <br/>
                        </React.Fragment>
                    )
                    
        )
        }
        </div>
    );
}
export default RadioBox;