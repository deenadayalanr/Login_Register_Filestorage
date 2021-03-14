const express=require('express');

const router=express.Router();

router.post('/register',(req,res,next) => {
    const Person={
        name:req.body.username,
        email:req.body.email,
        passWord:req.body.password,
        mobileNumber:req.body.mobilenumber,
    };
    console.log(Person);
});

module.exports=router;
