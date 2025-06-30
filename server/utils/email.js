const nodemailer = require('nodemailer');

const sendEmail=async(option)=>{
    try{
    //CREATE A TRANSPORTER
    const transporter=nodemailer.createTransport({
       host:process.env.EMAIL_HOST,
       port:process.env.EMAIL_PORT || 587,
       auth:{
          user:process.env.EMAIL_USER,
          pass:process.env.EMAIL_PASSWORD
       } 
    })
    //DEFINE THE EMAIL OPTIONS
    const mailOptions={
        from:"AI BUSINESS ANALYST  support<pminsights123@gmail.com>",
        to:option.email,
        subject:option.subject,
        text:option.message
    }
  await transporter.sendMail(mailOptions);
}catch (err) {
    console.error('Email sending failed:', err.message);
    throw err;
  }
};

module.exports=sendEmail;