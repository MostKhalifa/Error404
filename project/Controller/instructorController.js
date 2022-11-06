const { query } = require('express');
const asyncHandler = require('express-async-handler');
const { parseInt } = require('lodash');
const { default: mongoose } = require('mongoose');
const readline = require("readline");
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Courses = require("../Models/Courses");
const Instructor = require('../Models/InstructorSchema');


//create a new course
const createNewCourse = asyncHandler
(
    async (req,res) =>
    { 
            const  instructorId = req.params.id ;
            const  {CourseTitle,Price,NumberOfHours,Contract,CertifcateForm,CourseSubject,Discount,Instructors,EnrolledTrainees,Reviews,chapters} = req.body;

            // check if id is valid.
            if(!mongoose.Types.ObjectId.isValid(instructorId))
            {
               return res.status(404).send("the id given is in a invalid form ");
            }

            // check to see if the instructor adding the course, exists.
              await Instructor.findById(instructorId, (err, instructor)=>{
                 if(err){
                     return res.status(404).send({message:"Instructor not found!"});
                    }
                }).clone();
                
            // check to see if instructors added as authors for the courses, exist.
            for (let i = 0; i < Instructors.length; i++) {
                const instructorId = Instructors[i].instructorId;
                await Instructor.findById(instructorId, (err, instructor)=>{
                if(err){
                    return res.status(404).send({message:"Co-Instructors not found!"});
                }
                }).clone();
            }
            console.log("All Instructors found!"); 
            
            await interface.question(Contract + " yes/no", function(ans) {
                if (ans == "y" || ans == "yes") {
                    const course =  Courses.create({CourseTitle: CourseTitle,Price: Price,NumberOfHours: NumberOfHours,Contract: Contract,CertifcateForm: CertifcateForm,CourseSubject: CourseSubject,Discount: Discount,Instructors: Instructors,EnrolledTrainees: EnrolledTrainees,Reviews: Reviews,chapters: chapters});
                } else {
                    return res.status(404).send({message:"You need to accept the contract, in order to add the course!"});
                }
                // pause the interface so the program can exit
                interface.pause();
            });
            
            //add the course to the database.

    
    }
);



//View all Courses given by the instructor 
const viewAllInstructorCourses = asyncHandler
(
    async (req,res) =>
            {
                let CourseTitles =[];
            const  instructorId = req.params.id ;
            if(!mongoose.Types.ObjectId.isValid(instructorId))
            {
                res.status(404).send("the id given is in a invalid form ");
            }
            let instructorFound = await Instructor.find({_id :mongoose.Types.ObjectId(instructorId) });
            if(instructorFound.length!=1)
            {
                res.status(404).send("the insttuctor is not found");
            }
            const instructorCourses = (await Courses.find({Instructors : {$elemMatch : {instructorId :mongoose.Types.ObjectId(instructorId) }}})).forEach
            (
                (course)=>
                {
                    CourseTitles.push(course.CourseTitle);
                }
            );
            if(CourseTitles.length==0)
            {
                res.status(200).send("you are not currently teaching any courses ");
            }
            res.status(200).json(CourseTitles);
            }               
);
const filterInstructorCourses = asyncHandler
(
     async (req,res) =>
            {
            let CoursesFiltered =[];
            const  instructorId = req.params.id ;
            const  price = req.query.Price||Infinity;
            const subject = req.query.Subject||"{$}";
            
            if(!mongoose.Types.ObjectId.isValid(instructorId))
            {
                res.status(404).send("the id given is in a invalid form ");
            }
            let instructorFound = await Instructor.find({_id :mongoose.Types.ObjectId(instructorId) });
            if(instructorFound.length!=1)
            {
                res.status(404).send("the insttuctor is not found");
            }
            const instructorCourses = (await Courses.find({$or:[{CourseSubject: subject},{Price: {$gte :price}} ],Instructors : {$elemMatch : {instructorId : instructorId }}})).forEach
            (
                (course)=> 
                {
                    CoursesFiltered.push(course);
                }
            );
            if(CoursesFiltered.length==0)
            {
                res.status(200).send("no course given by you matches  your filter");
            }
            res.status(200).json(CoursesFiltered);
            }               
);
const searchInstructorCourses = asyncHandler
(
     async (req,res) =>
            {    
            let SearchResult =[];
            const instructorId = req.params.id ;
            const title = req.query.Title||"";
            const subject = req.query.Subject||"";
            const instructorName = req.query.InstName||"";
            console.log(req.query);
            console.log(title);
            if(!mongoose.Types.ObjectId.isValid(instructorId))
            {
                res.status(404).send("the id given is in a invalid form ");
            }
            let instructorFound = await Instructor.find({_id :mongoose.Types.ObjectId(instructorId) });
            if(instructorFound.length!=1)
            {
                res.status(404).send("the insttuctor is not found");
            }
            const instructorCourses = (await Courses.find({$or:[{ CourseSubject:subject },{CourseTitle:title},{Instructors : {$elemMatch : {instructorName : instructorName }}}],Instructors : {$elemMatch : {instructorId : instructorId }}})).forEach
                        (
                            (course)=>
                                {
                                    SearchResult.push(course);
                                }
                        );
        
            if(SearchResult.length==0)
            {
                res.status(200).send("no course given by you matches  your Search");
            }
            res.status(200).json(SearchResult);
            }  
                                 
);
module.exports={
    viewAllInstructorCourses,filterInstructorCourses,searchInstructorCourses,createNewCourse
};






/* Sample test data for createNewCourses:
{
        "CourseTitle": "The Bio-chemistry of neural networks in relation to Linear Algebra 909",
        "Price": 420 ,
        "NumberOfHours": 900,
        "Contract": "Contract",
        "CertifcateForm": "Triple PHd." ,
        "CourseSubject":"Science",
        "Discount": {"Avaliable":false,"Percentage":0},
        "Instructors":
        [
            {"instructorName": "InstFN3 InstLN3","instructorId":"636556c55ccca85b4590cfdb"},{"instructorName": "InstFN2 InstLN2","instructorId": "6365564d5ccca85b4590cfd7"},{"instructorName": "InstFN4 InstLN4","instructorId":"6366a0b271f0916539a58fd9"}
        ],
        "EnrolledTrainees":[],
        "Reviews":[], 
        "chapters":[{"chapterTitle":"the Physics of neuro-chemistry", "instructorNotes": " ","totalHours":"50"}]
}       
*/