import React, { useState } from "react";
import Weather from "./Weather";
import Login from "./Login";
import "./index.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [view, setView] = useState("weather"); 

  return (
    <div className="container">
      <header>
        <h1>Weather Forecast App</h1>
        <nav>
          <button onClick={() => setView("weather")}>Weather</button>
          {!loggedIn && <button onClick={() => setView("login")}>Login</button>}
          {loggedIn && <button onClick={() => setLoggedIn(false)}>Logout</button>}
        </nav>
      </header>

      {view === "weather" && <Weather loggedIn={loggedIn} />}
      {view === "login" && <Login setLoggedIn={setLoggedIn} setView={setView} />}
    </div>
  );
}
