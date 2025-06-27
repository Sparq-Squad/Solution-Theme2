const jwt = require("jsonwebtoken");

function setUser(user) {
  const payload = { ...user };
  const tokenGenerated = jwt.sign(
    payload,
    process.env.SECRET_KEY ?? "atopsecretkey"
  );
  return tokenGenerated;
}

function getUser(token) {
  if (!token) {
    return null;
  }
  return jwt.verify(token,  process.env.SECRET_KEY ?? "atopsecretkey");
}

module.exports = { setUser, getUser };
