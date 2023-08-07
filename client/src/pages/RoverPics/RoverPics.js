import React from "react";

import { Helmet } from "react-helmet-async";

export default function RoverPics() {
  return (
    <>
      <Helmet>
        <title>Mars Rover Pictures</title>
        <meta
          name="description"
          content="This page hads lots of nice pictures of Mars"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <h2>Images from the Cosmos</h2>
      </main>
    </>
  );
}
