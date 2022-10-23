const Survey = require('../DBmodels/surveyModel');
const asyncHandler = require("express-async-handler")


const logadmin = asyncHandler(async (req, res) => {
    const cred = { email: "admin@gmail.com", password: "admin" }
    const { email, password } = req.body;
    console.log(req.body);
    if (cred.email === email && cred.password === password) {
        res.status(200).json({
            // name: "Admin",
            email: email,
            isAdmin: "true",
        })
    } else {
        res.status(400)
        throw new Error("Invalid Email or Password")
    }
})

const survey = asyncHandler(async (req, res) => {
    const { q1, a1, a2, a3, a4 } = req.body

    console.log(req.body);

    const survey = await Survey.create({ q1, option1: { a1: a1 }, option2: { a2: a2 }, option3: { a3: a3 }, option4: { a4: a4 } })


})


const surveys = asyncHandler(async (req, res) => {
    const survey = await Survey.find()
    // console.log(survey); 
    res.json({ survey })
})


module.exports = { logadmin, survey, surveys }