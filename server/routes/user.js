const express =require('express');
const router=express.Router();
const{handleUserSignup,handleUserLogin}=require('../controllers/user');

router.get('/health',(req,res)=>{
    res.send('hello from user route want to do anything ! Health OK!');
})
router.post('/',handleUserSignup);
router.post('/login',handleUserLogin);
module.exports=router;
