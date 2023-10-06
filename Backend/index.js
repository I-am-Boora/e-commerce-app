const express = require("express");
const mangoose = require("mongoose");
const cors = require("cors");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const bodyparser = require("body-parser");
const app = express();
const PORT = 8080;

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

mangoose
  .connect("mongodb+srv://iamboora:boora25@cluster0.sqvk4he.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

// app.post("/home", (req, res) => {
//   const user = req.body;
//   res.json({
//     message: user,
//   });
// });

app.listen(PORT, () => {
  console.log("connection successfull");
});

const User = require("./Modals/user");
const Order = require("./Modals/order.js");

//endpoint to register the user

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exist !" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "registration failed !" });
  }
});

// endpoint to login the user
const getSecretKey = () => {
  const secretkey = crypto.randomBytes(32).toString("hex");
  return secretkey;
};

const secretkey = getSecretKey();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User does not exist !" });
  }
  if (user.password !== password) {
    return res.status(400).json({ message: "Password incorrect" });
  }

  token = jwt.sign({ userId: user._id }, secretkey);
  res.status(200).json({ token });
});
