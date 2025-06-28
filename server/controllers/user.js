const { setUser, getUser } = require("../service/auth.js");
const User = require("../models/user.js");

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
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

module.exports = {
  handleUserSignup,
  handleUserLogin,
  handleUserLogout,
};
