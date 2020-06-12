import React, { useState, useContext } from "react";
import StateContext from "../StateContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(StateContext);

  const handleLogin = e => {
    // test user and passwrod
    if (username && password) {
      dispatch({ type: "LOGIN", username, password });
    }
  };

  return (
    <form onSubmit={e => handleLogin(e)}>
      <div>
        <label>Username </label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label>Password </label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
