const express=require('express');
const userRoute=require('./routes/user_routes');
const adminRoute=require('./routes/admin_routes');

const app=express();

app.use('/user',userRoute);

app.use('/admin',adminRoute);

app.use((req,res,next) => {
    res.status(404).json('Invalid API Request');
});

app.listen(3000,() => {
    console.log("Server is running");
});