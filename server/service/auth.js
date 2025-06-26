import jwt from 'jsonwebtoken';

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
  return jwt.verify(token, secretKey);
}

module.exports = { setUser, getUser };
