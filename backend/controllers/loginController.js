const Login = require('../models/loginModel');

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await Login.findOne({ email });
    if (!user) {
        return res.status(400).json({ msg: 'User not found' });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }
    const token = user.getToken();
    res.status(200).json({ token });
}

module.exports = userLogin;