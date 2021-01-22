import "./App.css";
import Login from "./components/Login";
import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./apis/spotify";

function App() {
  const [access_token, setAccessToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    console.log("tokne", _token);
    if (_token) {
      console.log("here");
      setAccessToken(_token);
    }
    console.log("token", access_token);
  }, []);
  return (
    <div className="app">{access_token ? <h1>Loggedin</h1> : <Login />}</div>
  );
}

export default App;
