import "./Forum.css";

import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

export default function Forum() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // React Router's useNavigate hook
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    loginUser();
    setEmail("");
    setPassword("");
  };

  const loginUser = () => {
    fetch("https://final-project-q72l.onrender.com/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error_message) {
          alert(data.error_message);
        } else {
          alert(data.message);
          navigate("/dashboard");
          localStorage.setItem("_id", data.id);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Helmet>
        <title>My Website Forum</title>
        <meta
          name="description"
          content="This is the about page for my website yo yo"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <main className="login">
        <h1 className="loginTitle">Log in to your account</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="loginBtnCont">
            <button className="loginBtn">Sign In</button>
            <p className="loginText">
              Don't have an account? <Link to="/register"><span className="createAccount">Create one here!</span></Link>
            </p>
          </div>
        </form>
      </main>
    </>
  );
}
