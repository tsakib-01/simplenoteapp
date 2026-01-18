import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (text.trim() === "") return;
    setNotes([...notes, { id: Date.now(), text }]);
    setText("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 NoteApp</h1>
      <p className="subtitle">Simple & Professional React Notes App</p>

      <div className="input-box">
        <input
          type="text"
          placeholder="Write a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
      </div>

      <ul className="notes">
        {notes.length === 0 ? (
          <p className="empty">No notes yet</p>
        ) : (
          notes.map((note) => (
            <li key={note.id}>
              {note.text}
              <button onClick={() => deleteNote(note.id)}>❌</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
