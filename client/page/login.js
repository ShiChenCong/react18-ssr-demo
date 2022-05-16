import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div
      className="login"
      onClick={() => {
        console.log("this is login");
      }}
    >
      login page
    </div>
  );
}
