import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header";
import UserPanel from "./components/UserPanel";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="app">
          <Header />
          <ThemeToggle />
          <UserPanel />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;