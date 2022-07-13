import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");
      const json = await response.json();

      if (response.ok) {
        setNotes(json);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <div className="card-container">
        {notes && notes.map((note) => <Card note={note} key={note._id} />)}
        {/* <Card title="My Note" description="Mon amar kemon kemon kore" lastDate="23-2-21"/>
        <Card title="My Note" description="Mon amar kemon kemon kore" lastDate="23-2-21"/> */}
      </div>
    </div>
  );
};

export default Home;
