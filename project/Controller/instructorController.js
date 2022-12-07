const { query } = require('express');
const asyncHandler = require('express-async-handler');
const { parseInt } = require('lodash');
const { default: mongoose } = require('mongoose');
const Courses = require("../Models/Courses");
const Instructor = require('../Models/InstructorSchema');


const setInstructorCountry = asyncHandler(async (req, res) => {
    const instructor = await Instructor.findById(req.params.id)
  
    if (!instructor) {
      res.status(400)
    }
  
    const updatedInstructor = await Instructor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(updatedInstructor);
  });

//create a new course
const createNewCourse = asyncHandler
(
    async (req,res) =>
    { 
            const  instructorId = req.params.id ;
            const  {courseTitle,price,numberOfHours,contract,certifcateForm,courseSubject,discount,instructors,enrolledTrainees,reviews,chapters} = req.body;
            // check if id is valid.
            let instructorFound = Instructor.find({instructorId:instructorId});
            if(instructorFound!=1)
            {
                res.status(404).send("the insttuctor is not found"); 
            }
            instructorFound2=null;
            for(let i =0 ; i<instructors.length;i++)
            {
                instructorFound2=   Instructor.find({instructorId: instructors[i].instructorId});
                if(instructorFound2!=1)
                {
                    res.status(404).send("the insttuctor is not found"); 
                }
            }
            instructors.push(instructorFound);
            const course =  Courses.create({courseTitle: courseTitle,price: price,numberOfHours: numberOfHours,contract: contract,certifcateForm: certifcateForm,courseSubject: courseSubject,discount: discount,instructors: instructorFound,enrolledTrainees: enrolledTrainees,reviews: reviews,chapters: chapters});
            res.status(200).send("Course Created");
                // pause the interface so the program can exit
             
    });
//View all Courses given by the instructor j
const viewAllInstructorCourses = asyncHandler
(
    async (req,res) =>
            {
                let courseTitles =[];
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
            const instructorCourses = (await Courses.find({instructors : {$elemMatch : {instructorId :mongoose.Types.ObjectId(instructorId) }}})).forEach
            (
                (course)=>
                {
                    courseTitles.push(course.courseTitle);
                }
            );
            if(courseTitles.length==0)
            {
                res.status(200).send("you are not currently teaching any courses ");
            }
            res.status(200).json(courseTitles);
            }               
);
const filterInstructorCourses = asyncHandler
(
     async (req,res) =>
            {
            let coursesFiltered =[];
            const  instructorId = req.params.id ;
            const  price = req.query.Price||-1;
            const subject = req.query.Subject||null;
            if(!mongoose.Types.ObjectId.isValid(instructorId))
            {
               return res.status(404).send("the id given is in a invalid form ");
            }
            let instructorFound = await Instructor.find({_id :mongoose.Types.ObjectId(instructorId) });
            if(instructorFound.length!=1)
            {
                return res.status(404).send("the insttuctor is not found");
            }
            let query ={instructors : {$elemMatch : {instructorId : instructorId }}};
            if(subject!=null)
            {
                query= {courseSubject: subject ,price: {$gte :price} ,instructors : {$elemMatch : {instructorId : instructorId }}}
            }
            else
            {
                query= {price: {$gte :price} ,instructors : {$elemMatch : {instructorId : instructorId }}}     
            }
            const instructorCourses = (await Courses.find(query)).forEach
            (
                (course)=> 
                {
                    coursesFiltered.push(course);
                }
            );
            if(coursesFiltered.length==0)
            {
                return res.status(200).send("no course given by you matches  your filter");
            }
            res.status(200).json(coursesFiltered);
            
            }               
);
const searchInstructorCourses = asyncHandler
(
     async (req,res) =>
            {    
            let searchResult =[];
            const instructorId = req.params.id ;
            const title = req.query.Title||null;
            const subject = req.query.Subject||null;
            const instructorName = req.query.InstName||null;
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
            const instructorCourses = (await Courses.find({$or:[{ courseSubject:subject },{courseTitle:title},{instructors : {$elemMatch : {instructorName : instructorName }}}],instructors : {$elemMatch : {instructorId : instructorId }}})).forEach
                        (
                            (course)=>
                                {
                                    searchResult.push(course);
                                }
                        );
        
            if(searchResult.length==0)
            {
                res.status(200).send("no course given by you matches  your Search");
            }
            res.status(200).json(searchResult);
            }  
                                 
);
module.exports={
    viewAllInstructorCourses,filterInstructorCourses,searchInstructorCourses,createNewCourse,setInstructorCountry
};
/* Sample test data for createNewCourses:
{
        "CourseTitle": "The Bio-chemistry of neural networks in relation to Linear Algebra 909",
        "Price": 420 ,
        "NumberOfHours": 900,
        "contract": "contract",
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