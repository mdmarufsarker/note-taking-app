const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    description:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1000
    },
    lastDate: {
        type: String,
        default: Date.now
    }
    // JSON does not have a built-in type for date/time values. The general consensus is to store the date/time value as a string in ISO 8601 format.

}, { timestamps: true });


const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
