const mongoose=require('mongoose');

//defining schema
const studentSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:60},
    fees:{type:mongoose.Decimal128,required:true,validate:(v)=>
        v>=5000}
})

//compiling schema
const studentModel=mongoose.model('student',studentSchema);

module.exports=studentModel