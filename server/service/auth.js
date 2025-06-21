const jwt=require('jsonwebtoken');
const secretKey="Pminsights";

function setUser(user){
    const payload={...user};
    const tokenGenerated=jwt.sign(payload,secretKey);
    return tokenGenerated;
}

function getUser(token){
  if(!token){
    return null;
  }
  return jwt.verify(token,secretKey);
}

module.exports={setUser,getUser};