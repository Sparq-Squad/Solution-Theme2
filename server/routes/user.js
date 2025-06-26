import express from "express";
import { restrictToLoggedinUserOnly } from "../middlewares/auth";
import {
  handleUserLogin,
  handleUserLogout,
  handleUserSignup,
} from "../controllers/user";

const router = express.Router();

router.get("/health", (req, res) => {
  res.send("hello from user route want to do anything ! Health OK!");
});
router.get("/verify", restrictToLoggedinUserOnly, (req, res) => {
  res.status(200).json({ authenticated: true, user: req.user });
});

router.post("/signup", handleUserSignup);
router.post("/login", handleUserLogin);
router.post("/logout", handleUserLogout);

module.exports = router;