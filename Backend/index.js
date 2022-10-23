const express = require('express')
const mongodb = require('mongodb')
const connectDB = require('./config/db')
const morgan = require('morgan')
// const bodyparser = require('body-parser')
const limiter = require('./Middlewears/bottleneck')
const cors = require('cors');
const userRouter = require('./Router/userRouter')
const adminRouter = require('./Router/adminRouter')
const {notFound,errorHandler }=require('./Middlewears/errorhandling')


const PORT = process.env.PORT || 3008

const app = express()
connectDB()

app.use(express.json())
// app.use(bodyparser.json())
app.use(morgan('dev')) 
app.use(cors())


app.use('/',limiter, userRouter)
app.use('/admin', limiter, adminRouter)



app.use(notFound)
app.use(errorHandler)




app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

