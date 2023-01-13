import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { deepOrange, deepPurple } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
function Profile (){
        
    const [instructorInfo, setInstructorInfo] = useState(null);
    const [amountOwed, setamountOwed] = useState(null);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        axios
          .get("/instructor/getInst/6393668c6dd0bd88852031af")
          .then(function (response) {
            console.log(response);
            setInstructorInfo(response);
          });
      }, []);

      // useEffect(() => {
      //   axios
      //     .get("/instructor/amountOwed/6393668c6dd0bd88852031af")
      //     .then(function (response) {
      //       console.log(response);
      //       setamountOwed(response);
      //     });
      // }, []);

     function changePassword(){
         console.log("Mlaaaaaaaaaaaaaaaaaaaaaaak")
     }
     function changeFlag(){
        setFlag(!flag);
     }
     console.log(flag)
    
      return (
        <>
          <div>{
            instructorInfo &&
          <Stack spacing={1}>

      {/* For other variants, adjust the size with `width` and `height` */}
      <Avatar sx={{ bgcolor: deepPurple[500] , width:80 , height:80}}>N</Avatar>
      <List>
          <ListItem disablePadding>
              <ListItemText primary="Name: "  />
              <ListItemText primary={instructorInfo.data.firstName}  />
              <ListItemText primary={instructorInfo.data.lastName}  />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary="Email: "  />
              <ListItemText primary={instructorInfo.data.email}  />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary="My Country: "  />
              <ListItemText primary={instructorInfo.data.country}  />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary="User Name: "  />
              <ListItemText primary={instructorInfo.data.userName}  />
          </ListItem>
          <ListItem disablePadding>
              <ListItemText primary="Password : "  />
              <ListItemText primary={instructorInfo.data.password}  />
              <Button variant="contained" sx={{ bgcolor: deepPurple[500]}} onClick={changeFlag}>{flag?<SaveIcon onClick={changePassword} /> :<EditIcon/>}</Button>
          </ListItem>
          {/* {
            amountOwed &&
            <ListItem disablePadding>
              <ListItemText primary="Amount Owed By me : "  />
              <ListItemText primary={amountOwed.data}  />
          </ListItem>
} */}
          

         { flag && 
            
        <ListItem disablePadding>
        <ListItemText primary="New Password : "  />
        <TextField id="standard-basic" label="type Password here" variant="standard" />
        </ListItem>
            
         
        }
      

        </List>
    </Stack>
}
          </div>
        </>
      );

}

export default Profile;