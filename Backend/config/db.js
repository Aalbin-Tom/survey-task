const mongoose=require('mongoose')


const connectDB=()=>{
try {
    const conn = mongoose.connect('mongodb+srv://aalbin:aalbin@cluster0.zbvndqe.mongodb.net/?retryWrites=true&w=majority')
    // const conn = mongoose.connect('mongodb://127.0.0.1:27017/ap')

    console.log(`db connectred`);
} catch (error) {
    console.log(`error:${error}`);

}

}
module.exports=connectDB
