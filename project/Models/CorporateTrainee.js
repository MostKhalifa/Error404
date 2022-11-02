const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Courses = require('./Courses');
//Creating the CorporateTraineeSchema
const CorporateTraineeSchema = new Schema
(
    {
        FirstName: 
        {
            type: String,
            required: true,
        },
        LastName:
        {
            type: String,
            required: true,
        },
        Email: 
        {
            type: String,
            required: true
        },
        Username: 
        {
            type: String,
            required: true,
        },
        Password: 
        {
            type: String,
            required: true
        },
        Gender: 
        {
            type: Boolean,
            required: true
        },
        Country: 
        {
            type: String,
            required: true,
        },
        Corporate: 
        {
            type: String,
            required: true,
        },   
        Courses:
        [
            {
                CourseID: 
                {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref : 'Courses'
                }
            }
        ],
    }, { timestamps: true }
);
//Modeling the CorporateTraineeSchema in the MongoDb Cluster and exporting into into usable variable 
const CorporateTrainee = mongoose.model('CorporateTrainee', CorporateTraineeSchema);
module.exports = CorporateTrainee;