import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    console.log(location);
    if (location.pathname === "/") {
      setPageName("marsView");
    } else if (location.pathname === "/forum") {
      setPageName("marsForum");
    } else if (location.pathname === "/weather") {
      setPageName("todaysPic");
    } else if (location.pathname === "/roverpics") {
      setPageName("roverWatch");
    }
  }, [location]);

  return (
    <header>
      <nav className="navigation">
        <h1 key={pageName}>{pageName}</h1>
        <ul>
          <li>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              home
            </Link>
          </li>
          <li>
            <Link
              to="/forum"
              style={{ textDecoration: "none", color: "white" }}
            >
              forum
            </Link>
          </li>
          <li>
            <Link
              to="/weather"
              style={{ textDecoration: "none", color: "white" }}
            >
              todaysPic
            </Link>
          </li>
          <li>
            <Link
              to="/roverpics"
              style={{ textDecoration: "none", color: "white" }}
            >
              roverPics
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
