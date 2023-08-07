import React from "react";
// import image from "../../components/images/mars2-no-background";

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
        <div className="hero">{/* <img src={image} alt="mars"></img> */}</div>
      </main>
    </div>
  );
}
