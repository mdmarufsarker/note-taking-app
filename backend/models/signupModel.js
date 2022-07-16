const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });


const Signup = mongoose.model('Signup', signupSchema);
module.exports = Signup;
