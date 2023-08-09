import React from "react";
import "../../pages/Forum/Forum.css";

import { Helmet } from "react-helmet-async";

export default function Forum() {
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
      <main>
        <h1>marsForum</h1>
      </main>
    </>
  );
}
