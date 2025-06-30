const express = require("express");
const { restrictToLoggedinUserOnly } = require("../middlewares/auth.js");
const {
  handleUserLogin,
  handleUserLogout,
  handleUserSignup,
  handleUserresetPassword,
  handleUserForgotPassword,
} = require("../controllers/user.js");

const router = express.Router();

router.get("/health", (req, res) => {
  res.send("hello from user route want to do anything ! Health OK!");
});
router.get("/forgotPassword", (req, res) => {
  res.send("forgot password");
});
router.get("/verify", restrictToLoggedinUserOnly, (req, res) => {
  res.status(200).json({ authenticated: true, user: req.user });
});

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.post("/logout", handleUserLogout);
router.patch("/resetPassword/:token",handleUserresetPassword );
router.post("/forgotPassword",handleUserForgotPassword);

module.exports = router;
