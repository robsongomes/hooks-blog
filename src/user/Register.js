import React, { useState, useContext } from "react";
import StateContext from "../StateContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { state, dispatch } = useContext(StateContext);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "REGISTER", username, password, repeatPassword });
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
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
      <div>
        <label>Repeat Password </label>
        <input
          value={repeatPassword}
          onChange={e => setRepeatPassword(e.target.value)}
          type="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Register;
