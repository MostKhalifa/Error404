const { query } = require('express');
const asyncHandler = require('express-async-handler');
const { parseInt } = require('lodash');
const Courses = require("../Models/Courses");
const Instructor = require("../Models/InstructorSchema");

const createNewCourse = asyncHandler
(
    async (req,res) =>
    {   
        const  {CourseTitle,Price,NumberOfHours,Contract,CertifcateForm,CourseSubject,Discount,Instructors,EnrolledTrainees,Reviews,chapters} = req.body;

        // check to see if the instructor adding the course, exists.
        const instructorId = req.params.id;
        await Instructor.findById(instructorId, (err, instructor)=>{
            if(!instructor){
               return res.send({message:"Instructor not found!"});
            }
        });

        // check to see if instructors added as authors for the courses, exist.
        for (let i = 0; i < Instructors.length; i++) {
           const instructorId = Instructors[i].instructorId;
           await Instructor.findById(instructorId, (err, instructor)=>{
            if(!instructor){
               return res.send({message:"Instructor not found!"});
                
            }
           });
          } 


        const course = await Courses.create({CourseTitle: CourseTitle,Price: Price,NumberOfHours: NumberOfHours,Contract: Contract,CertifcateForm: CertifcateForm,CourseSubject: CourseSubject,Discount: Discount,Instructors: Instructors,EnrolledTrainees: EnrolledTrainees,Reviews: Reviews,chapters: chapters});
    
    }
)

/*

{
    const  {CourseTitle,Price,NumberOfHours,Contract,CertifcateForm,CourseSubject,Discount,Instructors,EnrolledTrainees,Reviews,chapters} = req.body;
    Courses.findOne({CourseTitle: CourseTitle, Instructors: Instructors}),(err,course)=>{
    if(course){
        res.send({message:"Entschuldigung! Course already exists!"});
    } else {
        const course = new Courses({CourseTitle,Price,NumberOfHours,Contract,CertifcateForm,CourseSubject,Discount,Instructors,EnrolledTrainees,Reviews,chapters});
        course.save(err=>{
            if(err){
                res.send(err)
            }else{
                res.send({message:"Course created successfully!"})
            }
        })
    }
}
}



*/