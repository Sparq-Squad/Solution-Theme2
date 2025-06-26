import {getUser} from '../service/auth';

function restrictToLoggedinUserOnly(req, res, next) {
  try {
    const token = req.cookies.UID;

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    const user = getUser(token); // getUser internally verifies the JWT

    if (!user) {
      return res.status(403).json({ error: 'Forbidden: Invalid or expired token' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { restrictToLoggedinUserOnly };