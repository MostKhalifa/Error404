const mongoose = require('mongoose');
const express = require("express");
const app = express();
const MongoURI = 'mongodb+srv://Error404:Error404TeamNotFound@jalp.jnqmtan.mongodb.net/?retryWrites=true&w=majority' ;
const port = process.env.PORT || "8000";
mongoose.connect(MongoURI)
.then(()=>{
  console.log("MongoDB is now connected!")
})
.catch(err => console.log(err));
app.listen(port, () => {
       console.log(`Listening to requests on http://localhost:${port}`);
     })
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/course', require('./Routes/coursesRoutes'));
app.use("/Instructor",require("./Routes/instructorRoutes"));
app.use('/admin' , require('./Routes/adminRoutes'));

