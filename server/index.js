const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoute = require("./routes/user.js");
const staticRoute = require("./routes/staticRouter.js");
const { connectToMongoDb } = require("./connections/connect.js");
const { restrictToLoggedinUserOnly } = require("./middlewares/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

//connect to database
const mongoPromise = connectToMongoDb(
  process.env.MONGO_URL_CLOUD ?? "mongodb://localhost:27017/"
);
mongoPromise
  .then(() => {
    console.log("Connected to Mongo Database");
  })
  .catch((err) => {
    console.log(err, "Error in connecting to database");
  });

//Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use("/", staticRoute);
app.use("/user", userRoute);
app.use("/dashboard", restrictToLoggedinUserOnly);
app.use("/product", require("./routes/product.js"));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
