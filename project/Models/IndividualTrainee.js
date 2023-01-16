const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Courses = require("./Courses");
//Creating the IndividualTraineeSchema
const IndividualTraineeSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      unique:true,
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: Boolean,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    courses: [
      {
        CourseID: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Courses",
        },
        chapters: [
          {
            chapterNumber: {
              type: Number,
              required: true,
            },
            chapterTitle: {
              type: String,
              required: true,
            },
            chapterVideo: {
              type: String,
            },
            instructorNotes: {
              type: String,
              required: true,
            },
            totalHours: {
              type: Number,
              required: true,
            },
            exercise: [
              {
                questionHead: {
                  type: String,
                  required: true,
                },
                answers: [
                  {
                    answerBody: {
                      type: String,
                      required: true,
                    },
                    valid: {
                      type: Boolean,
                      required: true,
                      default: false,
                    },
                  },
                ],
              },
            ],
            chaptersAssessments: [
              {
                questionHead: {
                  type: String,
                  required: true,
                },
                answers: [
                  {
                    answerBody: {
                      type: String,
                      required: true,
                    },
                    valid: {
                      type: Boolean,
                      required: true,
                    },
                  },
                ],
              },
            ],
            
          },
        ],
        noViewed: {
          type: Number,
          required: true,
        },
        progress: {
          type: Number,
          required: true,
          default: 0,
        },
        completed: {
          type: Boolean,
          required: true,
          default: false,
        },
      },
      
    ],
    wallet: {
      type: Number,
      required: true,
      default: 0,
    },
    
  },
  { timestamps: true }
);
//Modeling the IndividualTraineeSchema in the MongoDb Cluster and exporting into into usable variable
const IndividualTrainee = mongoose.model(
  "IndividualTrainee",
  IndividualTraineeSchema
);
module.exports = IndividualTrainee;
