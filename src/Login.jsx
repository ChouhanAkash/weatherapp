import React, { useState } from "react";
import "./Login.css"
export default function Login({ setLoggedIn, setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const res = await fetch(
        "https://fleetmanagement-c4443-default-rtdb.firebaseio.com/users.json"
      );
      const data = await res.json();

      let found = false;
      for (let key in data) {
        if (data[key].email === email && data[key].password === password) {
          found = true;
          break;
        }
      }

      if (found) {
        alert("Login successful");
        setLoggedIn(true);
        setView("weather");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching data");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={loginUser}>Login</button>
    </div>
  );
}
