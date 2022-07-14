const Signup = require("../models/signupModel")

const userSignup = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await Signup.findOne({ email });
    if (user) {
        return res.status(400).json({ msg: 'User already exists' });
    }
    const newUser = new Signup({ name, email, password });
    await newUser.save();
    const token = newUser.getToken();
    res.status(200).json({ token });

}

module.exports = userSignup