const express = require('express')

const router = express.Router()
const { registerUser, surveys, getsurvey } = require('../controller/userConroller')



router.get('/', (req, res) => {
    res.send("hello")
})

// router.get('/', registerUser)
router.post('/login', registerUser)
router.post('/survey', surveys) 
router.get('/getsurvey', getsurvey)

    
module.exports = router
