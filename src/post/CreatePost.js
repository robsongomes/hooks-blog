import React, { useState } from "react";

const CreatePost = ({ user, posts, dispatch }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreate = e => {
    e.preventDefault();
    dispatch({ type: "POST_CREATE", title, content, author: user });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={e => handleCreate(e)}>
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          name="create-title"
          id="create-title"
        />
      </div>
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <input type="submit" value="Create" />
    </form>
  );
};

export default CreatePost;
