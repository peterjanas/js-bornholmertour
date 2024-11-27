import React, { useState } from "react";
import { fetchData } from "../FetchData";
import { useNavigate } from "react-router";


const Login = ({ setIsLoggedIn }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    fetchData("http://localhost:3000/users", (data) => {
      const user = data.find(
        (u) => u.login === login && u.password === password
      );

      if (user) {
        setMessage(`Welcome back, ${user.login}!`);
        setIsLoggedIn(true); // Set login state to true
        navigate("/admin"); // Redirect to admin page
      } else {
        setMessage("Invalid login or password. Please try again.");
      }
    }, "GET");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      {message && <p className="login-message">{message}</p>}
    </div>
  );
};

export default Login;

