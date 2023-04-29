const mongoose =require('mongoose')

const connectDB=async (DATABASE_URL)=>{
    try{
        await mongoose.connect(DATABASE_URL)
        console.log("Connected successfully")
    }
    catch(err){
        console.log(err)
    }
}

module.exports=connectDB