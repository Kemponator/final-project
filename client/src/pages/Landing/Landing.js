import React from "react";

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
        <header></header>
        <footer></footer>
      </main>
    </div>
  );
}
