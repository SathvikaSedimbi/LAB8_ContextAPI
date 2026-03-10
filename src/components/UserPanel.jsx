import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

const UserPanel = () => {
  const { user, login, logout } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`user-panel ${theme}`}>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in to continue.</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default UserPanel;