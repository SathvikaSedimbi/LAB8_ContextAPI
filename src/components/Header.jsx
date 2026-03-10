import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className={`header ${theme}`}>
      <h1>React Context API Demo</h1>
    </header>
  );
};

export default Header;