import React, { useReducer, useEffect, useState } from "react";
import "./styles.css";
import UserBar from "./user/UserBar";
import PostList from "./post/PostList";
import PostCreate from "./post/CreatePost";
import appReducer from "./reducers";
import Header from "./Header";
import ThemeContext from "./ThemeContext";
import ChangeTheme, { THEMES } from "./ChangeTheme";
import StateContext from "./StateContext";

const initialPosts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread!",
    author: "Daniel Bugl"
  },
  {
    title: "Using React Fragments",
    content: "Keeping the DOM tree clean!",
    author: "Daniel Bugl"
  }
];

export default function App() {
  const [theme, setTheme] = useState(THEMES[0]);
  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: initialPosts
  });
  const { user, posts } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`;
    } else {
      document.title = "React Hooks Blog";
    }
  }, [user]);

  return (
    <div style={{ padding: 8 }}>
      <StateContext.Provider value={{ state, dispatch }}>
        <ThemeContext.Provider value={theme}>
          <Header text="React Hooks Blog" />
          <ChangeTheme theme={theme} setTheme={setTheme} />
          <br />
          <UserBar />
          <br />
          {user && <PostCreate user={user} posts={posts} dispatch={dispatch} />}
          <br />
          <hr />
          <PostList posts={posts} />
        </ThemeContext.Provider>
      </StateContext.Provider>
    </div>
  );
}
