const express=require('express');

const app=express();

app.get('/',(req,res,next) => {
    res.json('Api connected');
});

app.listen(3000,() => {
    console.log("Server is running");
});