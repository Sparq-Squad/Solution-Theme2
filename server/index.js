// require modules
const express= require('express');
const app=express();
const PORT=process.env.PORT || 5000;
const userRoute=require('./routes/user');
const staticRoute=require('./routes/staticRouter');
const path=require('path');
const {connectToMongoDb}=require('./connections/connect');
const cookieParser = require('cookie-parser');
const {restrictToLoggedinUserOnly} = require('./middlewares/auth');

//connect to database
const mongoUrl="mongodb://localhost:27017/LoginSignupPage";
const mongoPromise=connectToMongoDb(mongoUrl);
mongoPromise.then(()=>{
    console.log("Connected to Localhost Database");
}).catch((err)=>{
    console.log(err,"Error in connecting to database");
})

//connecting interactivity
app.set('view engine','ejs');
app.set('views',path.resolve("./views"));


//Middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routing middlewares
app.use("/",staticRoute);
app.use("/user",userRoute);

//Server running port
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});