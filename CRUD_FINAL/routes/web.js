const express=require('express')
const router=express.Router()
const path=require('path')
const studentController = require(path.join(__dirname,'../controller/studentController.js'));


router.get('/',studentController.getAllDoc)

router.post('/',studentController.createDoc)

router.get('/edit/:id',studentController.editDoc)

router.post('/update/:id',studentController.updateDocById)

router.post('/delete/:id',studentController.deleteDocById)


module.exports=router