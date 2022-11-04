const asyncHandler = require('express-async-handler');
const admins = require('../Models/AdminSchema');
const corporateTrainee = require('../Models/CorporateTrainee');
const instructor = require('../Models/InstructorSchema');

// Adding another Admin (requirement 55)
/* Request body
{"username" : "",
"email" : "",
"password" : ""
}
*/
exports.addAdmin = asyncHandler (
    async (req , res) =>{
    if(admins.findOne({email : req.params.email})){
        res.status(409).send("Email already in use");
        return;
    }
    if(admins.findOne({usesrname : req.params.username})){
        res.status(409).send("Username already in use");
        return;
    }
    admins.create(req.body);
    res.status(201).send('New Admin created');
});

// Adding a Corporate Trainee (requirement 56)
/* Request body (no need to add courses as empty array)
{"firstName" : "",
"lastName" : "",
"email" : "",
"username" : "",
"password" : "",
"gender" : , (true or false)
"country" : "",
"corporate" : ""
}
*/
exports.addCorporateTrainee = asyncHandler (
    async (req , res) =>{
    if(corporateTrainee.findOne({email : req.params.email})){
        res.status(409).send("Email already in use");
        return;
    }
    if(corporateTrainee.findOne({usesrname : req.params.username})){
        res.status(409).send("Username already in use");
        return;
    }
    corporateTrainee.create(req.body);
    res.status(201).send('New Corporate Trainee created');
});

// Adding an Instructor (requirement 57)
/* Request body (no need to add reviews/courses as empty array)
{"firstName" : "",
"lastName" : "",
"email" : "",
"username" : "",
"password" : "",
"gender" : , (true or false)
"country" : ""
}
*/
exports.addInstructor = asyncHandler (
    async (req , res) =>{
//    if(instructor.findOne( {$or : [{email : req.params.email} , {username : req.params.username}]})){
    if(instructor.findOne({email : req.params.email})){
        res.status(409).send("Email already in use");
        return;
    }
    if(instructor.findOne({usesrname : req.params.username})){
        res.status(409).send("Username already in use");
        return;
    }
    instructor.create(req.body);
    res.status(201).send('New Instructor created');
});

