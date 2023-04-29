const path=require('path');
const studentModel=require(path.join('../models/Student'))

class studentController{
    static createDoc=async (req,res)=>{
      try{
        const {name,age,fees}=req.body;
        const studentDoc=new studentModel({
          name:name,
          age:age,
          fees:fees
        })

        //saving document
        const result=await studentDoc.save()
        res.redirect('/student')
         }
        catch(err){
        console.log(err)
      }
      
    }
  
    static getAllDoc=async (req,res)=>{
      try{
        const result=await studentModel.find()
        res.render("index",{data:result})
      }catch(err){
        console.log(error)
      }
       
    }

    static editDoc=async (req,res)=>{
      try{
        const result=await studentModel.findById(req.params.id)
        res.render('edit',{data:result})

      }
      catch(err){
        console.log(err)
      }
    }

    static updateDocById=async (req,res)=>{
      try{
     const result=await studentModel.findByIdAndUpdate(req.params.id,req.body)
      }
      catch(err){
        console.log(err)
      }
      
      res.redirect('/student')
    }

    static deleteDocById=async (req,res)=>{
      try{
        const result=await studentModel.findByIdAndDelete(req.params.id)
        res.redirect('/student')

      }
      catch(err){
        console.log(err)
      }
    }
  };

module.exports=studentController