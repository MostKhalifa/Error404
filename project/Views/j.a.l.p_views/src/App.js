import React from 'react';
import {Route, Routes } from 'react-router-dom'
import "./assests/button"
import Exercise from './traineeViews/exercise.js';

function App() 
{
  return(
    
      <div className="App">
        <Exercise/>
        {/* <Routes>
          <Route path="/exercise" component={<Exercise/>} />
        </Routes> */}

      </div>
  );
}
export default App;