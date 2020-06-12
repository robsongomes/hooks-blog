import React, { useContext } from "react";
import Logout from "./Logout";
import Login from "./Login";
import Register from "./Register";
import StateContext from "../StateContext";

const UserBar = () => {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  if (user) {
    return <Logout />;
  } else {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Login />
        <Register />
      </div>
    );
  }
};

export default UserBar;
