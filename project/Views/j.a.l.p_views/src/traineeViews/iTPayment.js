import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';


function ITPayment (){
    //const courseId =window.location.href.split("?courseId=")[1];
    //const traineeId = window.location.href.split("?traineeId=")[1];
    let amount = 500;
    const [cardPaymentFlag, setCardPaymentFlag] = useState(true);
    const [walletPaymentFlag, setWalletPaymentFlag] = useState(true);
    const [notSuccWalletFlag, setNotSuccWalletFlag] = useState(false);
    const [succPaymentFlag, setSuccPaymentFlag] = useState(false);
    const [displayCardFlag, setdisplayCardFlag] = useState(false);
    const [traineeInfo, settraineeInfo] = useState(null);
    const [courseInfo, setCourseInfo] = useState(false);

    useEffect(() => {
        axios
          .get("/trainee/IndvidualTrainee/getById/63665a860a6c1686a07f7e28")
          .then(function (response) {
            console.log(response);
            settraineeInfo(response);
          });
      }, []);
      useEffect(() => {
        axios
          .get("/course/getCourse?courseId=639114e227ba150662d88096")
          .then(function (response) {
            console.log(response);
            setCourseInfo(response);
          });
      }, []);

    function turnOnCardPayment(){
       setWalletPaymentFlag(!walletPaymentFlag);
       setCardPaymentFlag(!cardPaymentFlag);
        
     }
     function turnOnWalletPayment(){
      setCardPaymentFlag(!cardPaymentFlag);
      setWalletPaymentFlag(!walletPaymentFlag);
     }
     console.log("traineeeeeee");
     if(traineeInfo)
     console.log(traineeInfo.data.wallet);
     if(courseInfo)
     console.log(courseInfo.data.price);
     
     function walletPayment(){
        turnOnWalletPayment();
        if(traineeInfo){
          if(courseInfo){
            if(traineeInfo.data.wallet<=courseInfo.data.price){
            setNotSuccWalletFlag(true);
            console.log("gowaaaa");
            }
           else{
             let newValue = traineeInfo.data.wallet-courseInfo.data.price;
             axios.put("/trainee/IndividualTrainee/setCountry/63665a860a6c1686a07f7e28",{
              wallet:newValue
            }).then((res)=>{
              axios
              .get("/trainee/IndvidualTrainee/getById/63665a860a6c1686a07f7e28")
              .then(function (response) {
                console.log(response);
                settraineeInfo(response);
                setSuccPaymentFlag(true);
                            });})
         }
          }
        }
     }
     function cardPayment(){
        turnOnCardPayment();
        setdisplayCardFlag(true);
     }
     function cardDone(){
      setSuccPaymentFlag(true);
     }
      return (
        <>
          <div>
            {courseInfo &&
            <h1>Amount to be paid: {courseInfo.data.price}</h1>
}
          </div>
          <div>
          {
           walletPaymentFlag &&
          <Button onClick={walletPayment} variant="contained" disableElevation sx={{ bgcolor: '#F4976C' }} >
           Pay Using my Wallet 
            </Button>
}

            {
              cardPaymentFlag &&
            <Button onClick={cardPayment}  variant="contained" disableElevation sx={{ bgcolor: '#F4976C' }} >
           Pay Using Card 
            </Button>
}

{
    notSuccWalletFlag && 
    <Alert severity="error">Not enough amount in the wallet </Alert>
}
{
    succPaymentFlag && 
    <Alert severity="success">Successful Payment </Alert>
}

{
  displayCardFlag &&
<div>
 <TextField
 required
 id="outlined-required"
 label="Required"
 defaultValue="Card Name Holder"
/>
</div>
}

{
  displayCardFlag &&
<div>
 <TextField
 required
 id="outlined-required"
 label="Required"
 defaultValue="Credit Card Number"
/>
</div>
}
{
  displayCardFlag &&
<div>
<TextField
           required
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="Expiration"
        />
</div>
}
{
  displayCardFlag &&
<div>
<TextField
           required
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="CVV"
        />
</div>
}
{
  displayCardFlag &&
<div>
<Button onClick={cardDone} variant="contained">Continue to Check Out</Button>
</div>
}
  

          </div> 
        </>
      );

}

export default ITPayment;
