import React from "react";
import Mars2 from "../../images/mars2.0.png";
import "./Landing.css";

import { Helmet } from "react-helmet-async";

export default function Landing() {
  return (
    <div>
      <Helmet>
        <title>My Website</title>
        <meta
          name="description"
          content="This is the homepage for my website."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <div className="hero">
          <img className="mars2" src={Mars2} alt="mars" />
        </div>
        <div className="welcome">
          <h2>Welcome to Mars!</h2>
        </div>
      </main>
    </div>
  );
}
