const { setUser, getUser} = require("../service/auth.js");
const User = require("../models/user.js");
const sendEmail = require ("../utils/email.js");
const crypto = require('crypto');

async function handleUserSignup(req, res) {
  const { name, email, password, confirmPassword } = req.body;
  try {
    const existingUser = await User.findOne({ email });
      if(password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const newUser = await User.create({ name, email, password });
    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = setUser(user);
    res.cookie("UID", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV == "production",
      path: "/",
      sameSite: process.env.NODE_ENV == "production" ? "None" : "Lax",
    });

    return res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function handleUserLogout(req, res) {
  try {
    res.clearCookie("UID", {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "Lax",
    });
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function handleUserForgotPassword(req,res,next){
//1 Get the user based on posted email
//2 generate a reset token
//3 send it to the user
const user = await User.findOne({email: req.body.email});
// console.log(user);
if(!user){
  return res.status(404).json({message: "User not found ! Please give a valid email"});
}
const resetToken = user.createResetPasswordToken();
await user.save({validateBeforeSave: false});
// console.log("after saving user in forgot password route",user);

const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
const message=`We have received a password reset request . Please use the link below to reset your Password\n\n${resetUrl}\n\nThis reset password link will expire in 10 minutes.`;
// console.log(resetUrl);
try{
  await sendEmail({
  email:user.email,
  subject:"Password Reset Request",
  message:message
});
// console.log(message);
return res.status(200).json({
  status:"success",
  message:"Password reset link sent to user's email successfully"});
}catch(err){
  user.passwordResetToken=undefined;
  user.passwordResetExpires=undefined;
  await user.save({validateBeforeSave: false});
  console.log("Error in sending email",err);
  return res.status(500).json({message: "Email could not be sent . Please try again later"});
}
}

async function handleUserresetPassword(req,res,next){
//IF THE USER EXISTS WITH THE GIVEN TOKEN AND TOKEN HAS NOT EXPIRED

try{
const {password,confirmPassword}=req.body;
if(password !== confirmPassword){
  return res.status(400).json({error: "Passwords do not match"});
}
const token=crypto.createHash("sha256").update(req.params.token).digest("hex");
const user=await User.findOne({passwordResetToken:token,passwordResetExpires:{$gt:Date.now()}});
if(!user){
  return res.status(400).json({error: "Invalid or expired reset session , Please do forgot password again"});
}
//2 RESET THE PASSWORD
user.password=req.body.password;
user.passwordResetToken=undefined;
user.passwordResetExpires=undefined;
user.passwordChangedAt=Date.now();
await user.save();
//3 LOGIN THE USER
const loginToken=setUser(user);
return res.status(200).json({message: "Password reset successful"});
}
catch(err){
  return res.status(400).json({error: "Invalid or expired token"});
}

}



module.exports = {
  handleUserSignup,
  handleUserLogin,
  handleUserLogout,
  handleUserresetPassword,
  handleUserForgotPassword,
};
