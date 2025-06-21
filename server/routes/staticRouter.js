const express=require('express');
const router=express.Router();
const {restrictToLoggedinUserOnly}=require('../middlewares/auth');

router.get('/',restrictToLoggedinUserOnly,async(req,res)=>{
   return res.render('home');
});

router.get('/signup',async(req,res)=>{
  const message = req.query.message || null;
  res.render('signup', { message });
 });

router.get('/login',async(req,res)=>{
    return res.render('login');
 }); 

module.exports=router;