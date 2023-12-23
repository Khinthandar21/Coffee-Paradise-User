import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/SignUp.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null); // State to manage logged-in user

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login logic here (e.g., validate credentials)
    // For example, check if the email and password match stored credentials
    const storedUsers = JSON.parse(localStorage.getItem("SignUpData")) || [];

    // Mock login logic (validate against stored users)
    const user = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // If login successful, set loggedInUser
      console.log("Login Successful");
      console.log("Logged-in User Data:", user);
      setLoggedInUser(user); // Set the logged-in user
    } else {
      console.log("Invalid credentials. Please try again.");
    }

    // Clear the form fields after login attempt (optional)
    setEmail("");
    setPassword("");
  };

  return (
    <div className={`${styles.container} w-50`}>
      <form onSubmit={handleLogin}>
        <h1>Login Form</h1>
        {/* <div className="ui divider"></div>*/}
        <div className="ui form">
          <div className="field d-flex flex-column">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p></p>
          <div className="field d-flex flex-column">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p></p>
          <button className="fluid ui button blue" type="submit">
            Submit
          </button>
        </div>
      </form>

      {/* Render Link if user is logged in */} 
      {loggedInUser && (
        <div>
          <p style={{ color: "white", fontSize: "17pt", textAlign: "center" }}>Welcome, {loggedInUser.username}!</p>

          <Link className="nav-link text-center text-md-start" to="/Menu" style={{color: "white", fontSize: "20pt"}}>
          <i class="bi bi-box-arrow-right me-2"></i>
            Go to Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default Login;
