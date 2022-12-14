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
            if(!mongoose.Types.ObjectId.isValid(instructorId))
            {
                res.status(404).send("the id given is in a invalid form ");
            }
            const  {courseTitle,courseDescripation,courseDescripationVideo,price,numberOfHours,contract,certifcateForm,courseSubject,discount,enrolledTrainees,reviews,chapters} = req.body;
            // check if id is valid.
            let instructorFound = await Instructor.find({_id:mongoose.Types.ObjectId(instructorId)},{firstName:1,lastName:1});
            if(instructorFound.length!=1)
            {
                res.status(404).send("the insttuctor is not found"); 
            }
            const exists = (await Courses.find({courseTitle:courseTitle,"instructor.instructorId":mongoose.Types.ObjectId(instructorId)})).length>0?true:false;
            console.log(exists);
            if(exists)
            {
                res.status(404).send("the course already exists");   
                return;
            }
            for(let i=0;i<=chapters.length;i++)
            {
                for(let j=i+1;j<=chapters.length;j++)
                {
                    if(chapters[i].chapterTitle===chapters[j].chapterTitle)
                    {
                        res.status(404).send("chapter number:" +i +"chapter number: "+j +"have the same name please rename either and try again");
                    }
                }
            }
            Courses.create
            ({
                courseTitle: courseTitle,
                courseDescripation: courseDescripation,
                courseDescripationVideo:courseDescripationVideo,
                price: price,
                numberOfHours: numberOfHours,
                contract: contract,
                certifcateForm: certifcateForm,
                courseSubject: courseSubject,
                discount: discount,
                instructor:{instructorId,instructorName:instructorFound[0].firstName+instructorFound[0].lastName},
                enrolledTrainees: enrolledTrainees,
                reviews: reviews,
                chapters: chapters
            });
            res.status(200).send("course created");
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
            const instructorCourses = (await Courses.find({"instructor.instructorId":mongoose.Types.ObjectId(instructorId)})).forEach
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
            let query ={"instructor.instructorId":mongoose.Types.ObjectId(instructorId)};
            if(subject!=null)
            {
                query= {courseSubject: subject ,price: {$gte :price} ,"instructor.instructorId":mongoose.Types.ObjectId(instructorId)}
            }
            else
            {
                query= {price: {$gte :price} ,"instructor.instructorId":mongoose.Types.ObjectId(instructorId)}     
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
            const instructorCourses = (await Courses.find({$or:[{ courseSubject:subject },{courseTitle:title}],"instructor.instructorId":mongoose.Types.ObjectId(instructorId)})).forEach
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

const rateAnInstructor = asyncHandler(async (req, res) => {
    const instructorRate = await Instructor.findById(req.params.id)
    req.query.reviewerID
    const {rating,review}=req.body
    if (!instructorRate) {
      res.status(400).send("Instructor not found!");
    }
    if ((!rating) && (!review)) {
      res.status(400).send("Please fill in the field");
    }
    if (!rating){
      res.status(400).send("Please enter the rating");
    }
    if((!review)){
      const ratedInstructor = await Instructor.findByIdAndUpdate(req.params.id, 
        {"reviews.rating":rating},
        {"reviews.reviewedBy":req.query.reviewerID},
         {new: true,})
    res.status(200).json(ratedInstructor)   
    }
    else{
      const ratedInstructor = await Instructor.findByIdAndUpdate(req.params.id,
        {"reviews.review":review}, 
        {"reviews.rating":rating},
        {"reviews.reviewedBy":req.query.reviewerID},
         {new: true,})
         res.status(200).json(ratedInstructor)   
    }
   })
  


module.exports={
    viewAllInstructorCourses,
    filterInstructorCourses,
    searchInstructorCourses,
    createNewCourse,
    setInstructorCountry,
    rateAnInstructor
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