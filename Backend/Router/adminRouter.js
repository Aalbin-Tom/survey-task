const express = require('express')
const router = express.Router()
const { logadmin ,survey, surveys } =require('../controller/adminController')



router.get('/', (req, res) => {
    res.send("admin")
})


// router.get('/ad',)
router.post('/login', logadmin)
router.post('/add-survey', survey)
router.get('/survey', surveys)
 



module.exports = router
