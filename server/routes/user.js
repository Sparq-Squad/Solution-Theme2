const express =require('express');
const router=express.Router();
const {restrictToLoggedinUserOnly}=require('../middlewares/auth');
const{handleUserSignup,handleUserLogin,handleUserLogout}=require('../controllers/user');

router.get('/health',(req,res)=>{
    res.send('hello from user route want to do anything ! Health OK!');
})
router.get('/verify', restrictToLoggedinUserOnly, (req, res) => {
  res.status(200).json({ authenticated: true, user: req.user });
});

router.post('/signup',handleUserSignup);
router.post('/login',handleUserLogin);
router.post('/logout',handleUserLogout);
module.exports=router;
