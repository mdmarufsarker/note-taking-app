const express = require("express");
const router = express.Router();

const {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");

// get all notes
// router.get("/", (req, res) => {
//   res.send("Get all notes");
// });
router.get("/", getAllNotes);

// get a single note
// router.get("/:id", (req, res) => {
//   res.send("Get a single note");
// });
router.get("/:id", getSingleNote);

// Create a new note
// router.post("/", (req, res) => {
//   res.send("Create a new note");
// });
router.post("/", createNote);

// Update a note
// router.patch("/:id", (req, res) => {
//   res.send("Update a note");
// });
router.patch("/:id", updateNote);

// Delete a note
// router.delete("/:id", (req, res) => {
//   res.send("Delete a note");
// });
router.delete("/:id", deleteNote);

module.exports = router;
