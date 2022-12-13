import { Fragment,} from "react";
import {ThemeProvider,createTheme} from '@mui/material';
import KarimTests from "./karimTests"
const theme =createTheme(
  {
    palette:
    {
    primary:{
      main:'#303c6c',
      contrastText:'#f4976c'  	
    },
    secondary:{
      main:'#f4976c',
      contrastText:'#303c6c'  	
    },
    text:
    {
      primary:'#f4976c',
      secondary:'#303c6c'
    }
    }
  }
);
function App() 
{
  return(
    <ThemeProvider theme={theme}>
    <Fragment>
    <KarimTests/>
    </Fragment>
    </ThemeProvider>
   
  );
}
export default App;