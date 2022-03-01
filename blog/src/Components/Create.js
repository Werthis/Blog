import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Werthis");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const app = { title, body, author };

    fetch("http://localhost:8000/myApps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(app),
    }).then(() => {
      console.log("added new app");
			// history.go(-1);
			history.push('/')
    });
  };

  return (
    <div className="create">
      <h2>Create new app</h2>
      <form onSubmit={handleSubmit}>
        <label>App title:</label>
        <input
          data-testid="titleInput"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a title..."
        />
        <label>App body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Add text..."
        ></textarea>
        <label>App author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Werthis">Werthis</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add App</button>
      </form>
      {/* <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p> */}
    </div>
  );
};

export default Create;
