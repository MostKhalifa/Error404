const { query } = require('express');
const asyncHandler = require('express-async-handler');
const { parseInt } = require('lodash');
const Courses = require("../Models/Courses");
//View all Courses given by the instructor 
const viewAllInstructorCourses = asyncHandler
(
    async (req,res) =>
            {
            const  instructorId = req.params.id ;
            const instructorCourses = (await Courses.find({Instructors : {$elemMatch : {instructorId : instructorId }}})).forEach
            (
                (course)=>
                {
                    res.status(200).json(course.CourseTitle);
                }
            );
            }               
);

const filterInstructorCourses = asyncHandler
(
     async (req,res) =>
            {
            const  instructorId = req.params.id ;
            const  priceStr = req.query.Price|0;
            const  subject = req.query.Subjec|"";
            const instructorCourses = (await Courses.find({$or:[{Subject:subject },{Price: {$gte :{$where :parseInt(int)}}} ],Instructors : {$elemMatch : {instructorId : instructorId }}})).forEach
            (
                (course)=> 
                {
                    res.status(200).json(course);
                }
            );
            }               
);

const searchInstructorCourses = asyncHandler
(
     async (req,res) =>
            {
            const instructorId = req.params.id ;
            const title = req.query.Title|{};
            const subject = req.query.Subject|{};
            const instructorName = req.query.InstName|{};
            const instructorCourses = 
                await Courses.find(
                    {$or:[{ Subject:subject },{CourseTitle:title},{Instructors : {$elemMatch : {instructorName : instructorName }}}],Instructors : {$elemMatch : {instructorId : instructorId }}}).forEach
                        (
                            (course)=>
                                {
                                    res.status(200).json(course);
                                }
                        );
                    }               
);
