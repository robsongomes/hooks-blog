import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Header = ({ text }) => {
  const theme = useContext(ThemeContext);

  return (
    <h1 style={{ color: theme.primaryColor, textAlign: "center" }}>{text}</h1>
  );
};

export default Header;
