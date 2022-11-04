const mongoose = require('mongoose');
const CorporateTrainee = require('./CorporateTrainee');
const IndividualTrainee = require('./IndividualTrainee');
const Instructor = require('./InstructorSchema');
const Schema = mongoose.Schema;
//Creating the CoursesSchema
const CoursesSchema = new Schema
(
    {
        CourseTitle:    
        {
            type: String,
            required: true,
        },
        Price: 
        {
            type: Number,
            required: true,
        },
        NumberOfHours:
        {
        type: Number,
            required: true,
        },
        Contract: 
        {
            type: String,
            required: true,
        },
        CertifcateForm: 
        {
            type: String,
        },
        CourseSubject: 
        {
            type: String,
            required:true,
            enum:['Maths','Tech','Science']
        },
        Discount:
        {
            Avaliable : 
            {
                type:Boolean,
                required :true,
                default: false
            },
            Percentage: 
            {
                type:Number,
                required : true,
                min:0,
                max:1,
            }
        },
        Instructors:
        [
            {
                instructorName:
                {
                    type:String,
                    required: true,
                },
                instructorId:
                {
                    type:Schema.Types.ObjectId,
                    required: true,
                    ref:'Instructor'
                },
            }
        ],
        EnrolledTrainees:
        [
            {
                traineeId:
                {
                    type:Schema.Types.ObjectId,
                    required: true,
                    refPath: 'TraineeType'                
                },
                TraineeType:
                {
                    type:String,
                    required:true,
                    enum:['CorporateTrainee','IndividualTrainee']
                }
            }
        ],
        Reviews:
        [
            {
                review:
                {
                    type:String,
                },
                rating:
                {
                    type:Number,
                    required: true,
                    max: 5,
                    min:0,
                    default: 0
                },
                reviewedBy:
                {
                    type:Schema.Types.ObjectId,
                    required :true,
                    refPath: 'TraineeType'
                },
                TraineeType:
                {
                    type:String,
                    required:true,
                    enum:['CorporateTrainee','IndividualTrainee']
                }
            }
        ], 
        chapters:
        [  
            { 
                chapterTitle: 
                {
                    type:String,
                    required:true,
                    unique:true
                }, 
                chapterVideo: 
                {
                    type:String,
                },
                instructorNotes: 
                {
                    type:String,
                    required:true
                },
                totalHours: 
                {
                    type:Number,
                    required:true
                },
                exercise:
                [   
                    { 
                        questionHead:
                        {
                            type:String,
                            required:true,
                        },
                        answers:
                        [
                            {
                                answerBody:
                                {    
                                    type :String,
                                    required:true
                                } ,
                                valid:
                                {
                                    type:Boolean,
                                    required:true,
                                    default:false
                                }    
                            }
                        ]
                    }
                ],
                chaptersAssessments:
                [     
                    { 
                        questionHead:
                        {
                            type:String,
                            required:true,
                        },
                        answers:
                        [
                            {
                                answerBody:
                                {    
                                    type :String,
                                    required:true
                                } ,
                                valid:
                                {
                                    type:Boolean,
                                    required:true
                                }    
                            }
                        ]
                    }      
                ],            
            },   
        ],
    }, { timestamps: true }
);
//Modeling the CoursesSchema in the MongoDb Cluster and exporting into into usable variable
const Courses = mongoose.model('Courses', CoursesSchema);
module.exports = Courses;