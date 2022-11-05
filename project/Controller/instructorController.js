const { query } = require('express');
const asyncHandler = require('express-async-handler');
const { parseInt } = require('lodash');
const { default: mongoose } = require('mongoose');

const Courses = require("../Models/Courses");
const Instructor = require('../Models/InstructorSchema');
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
    viewAllInstructorCourses,filterInstructorCourses,searchInstructorCourses
};