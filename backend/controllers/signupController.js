const Signup = require("../models/signupModel");
const bcrypt = require("bcryptjs");

const userSignup = async (req, res) => {
  const { name, email, password } = req.body;

  // check if user already exists
  const oldUser = await Signup.findOne({ email });
  if (oldUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  // hashed password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new Signup({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const user = await newUser.save();
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};

module.exports = userSignup;
