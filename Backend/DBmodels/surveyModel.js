const mongoose = require("mongoose")

const surveyShema = mongoose.Schema(
    {
        q1:
        {
            type: String,
            required: true
        }, option1: {
            a1:
            {
                type: String,
                required: true
            },
            count: {
                type: Number,
                default: 0
            }
        },

        option2: {
            a2:
            {
                type: String,
                required: true
            },
            count: {
                type: Number,
                default: 0
            }
        },
        option3: {
            a3:
            {
                type: String,
                required: true
            },
            count: {
                type: Number,
                default: 0
            }
        },
        option4: {
            a4:
            {
                type: String,
                required: true
            },
            count: {
                type: Number,
                default: 0
            }
        },
        users: []
    }
)

const Survey = mongoose.model("survey", surveyShema);
module.exports = Survey;