import React, { useContext } from "react";
import StateContext from "../StateContext";

const Logout = () => {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  const handleLogout = e => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <form onSubmit={e => handleLogout(e)}>
      Logged in as: <b>{user}</b>
      <button type="submit">Logout</button>
    </form>
  );
};

export default Logout;
