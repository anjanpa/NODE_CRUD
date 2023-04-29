const express=require('express');
const app=express();
const connectDB=require('./db/connectdb')
const web=require('./routes/web')
const port=3000

const studentController = require('./controller/studentController.js');


//connect to database
const DATABASE_URL="mongodb://127.0.0.1:27017/school"
connectDB(DATABASE_URL)

//parsers
app.use(express.urlencoded({extended:false}))

//set static files
app.use(express.static('./public'))

//set template engine
app.set('view engine','ejs')

//loading routers
app.use('/student',web)

app.use('/',(req,res)=>{
    res.send("Hi AGI")
})


//listen to port
app.listen(port,()=>{
    console.log(`server listening at port ${port}`)
})

