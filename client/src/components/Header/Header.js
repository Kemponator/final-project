import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <h1>marsView</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/Landing"}>Landing</Link>
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
    </div>
  );
}
