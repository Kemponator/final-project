import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const url = window.location.href;
  function getLastPart(url) {
    const parts = url.split("/");
    let pageName = "";
    if (parts.at(-1) === "") {
      pageName = "marsView";
    } else {
      pageName = parts.at(-1);
    }
    return pageName;
  }
  const headingOne = getLastPart(url);
  return (
    <header>
      <nav className="navigation">
        <h1>{headingOne}</h1>
        <ul>
          <li>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/forum"
              style={{ textDecoration: "none", color: "white" }}
            >
              Forum
            </Link>
          </li>
          <li>
            <Link
              to="/weather"
              style={{ textDecoration: "none", color: "white" }}
            >
              Weather
            </Link>
          </li>
          <li>
            <Link
              to="/roverpics"
              style={{ textDecoration: "none", color: "white" }}
            >
              RoverPics
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
