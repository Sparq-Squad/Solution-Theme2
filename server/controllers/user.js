const User=require('../models/user');
const {setUser,getUser}=require('../service/auth');

async function handleUserSignup(req,res){
    const {name,email,password}=req.body;
    await User.create({name,email,password});

   return res.render('login');
}
async function handleUserLogin(req,res){
   const {email,password}=req.body;
   const user= await User.findOne({email,password});
if (!user) {
const message = 'Invalid email or password';
  return res.redirect(`/signup?message=${message}`);
}

  
  const token=setUser(user);
  res.cookie('UID',token);
  return res.redirect('/');
}

module.exports={
    handleUserSignup,
    handleUserLogin,
}