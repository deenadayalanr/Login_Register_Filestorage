const express=require('express');
const User = require('../models/usermodal');
const router=express.Router();

router.post('/register',(req,res,next) => {
    const Person={
        name:req.body.username,
        email:req.body.email,
        passWord:req.body.password,
        mobileNumber:req.body.mobilenumber,
    };
    // console.log(Person);
    const register=new User(Person.name,Person.email,Person.passWord,Person.mobileNumber);
    register.saveRegister();
    res.json({status:"Registeration Successful"});
});

module.exports=router;
