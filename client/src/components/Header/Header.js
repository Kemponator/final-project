import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <body>
        <header>
          <nav className="navigation">
            <h1>marsView</h1>
            <ul>
              <li>
                <Link to={"/Landing"}>Home</Link>
              </li>
              <li>
                <Link to="/Forum">Forum</Link>
              </li>
              <li>
                <Link to="/Weather">Weather</Link>
              </li>
              <li>
                <Link to="/RoverPics">RoverPics</Link>
              </li>
            </ul>
          </nav>
        </header>
      </body>
    </div>
  );
}
