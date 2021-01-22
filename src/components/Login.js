import React from "react";
import { loginUrl } from "../apis/spotify";
import "./Login.css";
const SPOTIFY_LOGO =
  "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg";
function Login() {
  return (
    <div className="login">
      <img src={SPOTIFY_LOGO} alt="" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
