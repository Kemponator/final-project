import React from "react";

export default function Header() {
  return (
    <div>
      <header>
        <h1>marsView</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Landing</Link>
            </li>
            <li>
              <Link to="/">Forum</Link>
            </li>
            <li>
              <Link to="/">Weather</Link>
            </li>
            <li>
              <Link to="/">RoverPics</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
