import React from "react";

import { Helmet } from "react-helmet-async";

export default function Weather() {
  return (
    <>
      <Helmet>
        <title>Mars Weather</title>
        <meta name="description" content="It's pretty fucking cold" />
        <link rel="canonical" href="/" />
      </Helmet>
      <main>
        <h2>Chilly bois</h2>
      </main>
    </>
  );
}
