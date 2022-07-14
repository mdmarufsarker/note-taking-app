import { useState } from "react";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = { title, description, lastDate };

    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      if (json.title === "") setError("Title is required");
      if (json.description === "") setError("Description is required");
      if (json.lastDate === "") setError("Last Date is required");
      if (
        json.title !== "" &&
        json.description !== "" &&
        json.lastDate !== ""
      ) {
        setError(json.message);
      }
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setDescription("");
      setLastDate("");
      console.log("new note added:", json);
    }
  };
  return (
    <div className="addNote">
      <h2>Add New Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="input-box">
          <textarea
            placeholder="Enter Description"
            col="30"
            row="10"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter Last Date"
            onChange={(e) => setLastDate(e.target.value)}
            value={lastDate}
          />
        </div>
        <div>
          <input className="add" type="submit" value="Add Note" />
        </div>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default AddNote;
