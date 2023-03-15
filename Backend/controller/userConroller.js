const Survey = require('../DBmodels/surveyModel');
const User = require('../DBmodels/userModel')
const asyncHandler = require("express-async-handler")


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email })
    if (userExists) {
        const user = await User.findOne({ email })
        if (user && (await user.matchPassword(password))) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: "false",
                status: "loged in "
            })
        } else {
              res.status(400)
            throw new Error("Invalid Email or Password")
      }
console.log(userExists);
console.log("hhhhhh");
//sdfdsdfsdfs
console.log("hhhhhh");
//  } else {
//adasijisdifndfdskfm


    } else {
        const user = await User.create({
            name, email, password
        }); 
        if (user) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: "false",
                status: "user created"
            })
        } else {
            res.status(400)
            throw new Error("error")
        }
    }
    console.log(Error);
})


const surveys = asyncHandler(async (req, res) => {
    const { _id, formdata, ans, userid } = req.body
    console.log(req.body);
    const survey = await Survey.findOne({ _id: _id })
    // const answe = await Survey.findOne({ _id: _id } )
    const user = await User.findOne({ _id: userid })
    console.log(survey);

    let amount = parseInt(user.wallet) + 100
    console.log(user.wallet);
    console.log(amount);
    if (!survey.users.includes(userid)) {
        if (formdata == 'option1') {
            let count = parseInt(survey.option1.count) + 1
            await Survey.updateOne({ _id: _id }, { $set: { option1: { a1: ans, count: count } } })

        } else if (formdata == 'option2') {
            let count = parseInt(survey.option2.count) + 1
            await Survey.updateOne({ _id: _id }, { $set: { option2: { a2: ans, count: count } } })

        } else if (formdata == 'option3') {
            let count = parseInt(survey.option3.count) + 1
            await Survey.updateOne({ _id: _id }, { $set: { option3: { a3: ans, count: count } } })

        } else if (formdata == 'option4') {
            let count = parseInt(survey.option4.count) + 1
            await Survey.updateOne({ _id: _id }, { $set: { option4: { a4: ans, count: count } } })

        }


        await Survey.updateOne({ _id: _id }, { $push: { users: userid } })
        await User.updateOne({ _id: userid }, { $set: { wallet: amount } })

        res.json({
            survey
        })
    } else {
        // res.json({
        //     status: "response submitted before"
        // })
        res.status(400)
        throw new Error("response submitted ")
    }

})


const getsurvey = asyncHandler(async (req, res) => {
    const survey = await Survey.find()

    res.json({ survey })
})


module.exports = { registerUser, surveys, getsurvey } 
