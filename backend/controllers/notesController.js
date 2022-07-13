const Note = require("../models/notesModel");

// get all notes
const getAllNotes = async (req, res) => {
  const notes = await Note.find({}).sort({ createdAt: -1 });

  res.status(200).json(notes);
};

// get a single note
const getSingleNote = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (err) {
    res.status(400).json({ message: "Error getting a single note" + err.message });
  }
};

// Create a new note
const createNote = async (req, res) => {
  const { title, description, lastDate } = req.body;

  // add doc to db
  try {
    const note = await Note.create({ title, description, lastDate });
    res.status(200).json(note);
  } catch (err) {
    res.status(400).json({message: "Error creating note" + err.message });
  }
};
// Update a note
const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, description, lastDate } = req.body;
    
    try {
        const note = await Note.findByIdAndUpdate(id, {
        title,
        description,
        lastDate,
        });
        // findByIdAndUpdate(id, {...req.body});
        res.status(200).json(note);
    } catch (err) {
        res.status(400).json({ message: "Error updating note" + err.message });
    }
}

// Delete a note
const deleteNote = async (req, res) => {
    const { id } = req.params;
    
    try {
        const note = await Note.findByIdAndDelete(id);
        res.status(200).json(note);
    } catch (err) {
        res.status(400).json({ message: "Error deleting note" + err.message });
    }
}


module.exports = {
    getAllNotes,
    getSingleNote,
    createNote,
    updateNote,
    deleteNote
}