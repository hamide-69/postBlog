import "./App.css";
import { useEffect, useState } from "react";
import CallPost from "./Components/CallPost";

function App() {
  const [title, setTitle] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var myHeaders = new Headers();
      myHeaders.append("token", "pj11daaQRz7zUIH56B9Z");
      let res = await fetch(
        "https://frontend-case-api.sbdev.nl/api/posts",
        { headers: myHeaders },
        {
          method: "POST",
          body: JSON.stringify({
            title: title,
            content: content,
            category_id: category_id,
            image: image,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        setTitle("");
        setCategory_id("");
        setContent("");
        setImage("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          value={category_id}
          placeholder="Category"
          onChange={(e) => setCategory_id(e.target.value)}
        />
        <input
          type="file"
          id="img"
          name="image"
          accept="image/*"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          value={content}
          placeholder="content"
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>

      <div>
        <CallPost />
      </div>
    </div>
  );
}

export default App;
