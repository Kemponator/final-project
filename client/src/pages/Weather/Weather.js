import React from "react";
import "./Weather.css";

import { Helmet } from "react-helmet-async";

export default function Weather() {
  return (
    <>
      <Helmet>
        <title>Mars Weather</title>
        <meta name="description" content="It's pretty fucking cold" />
        <link rel="canonical" href="/" />
      </Helmet>
      <h1>weatherView</h1>
    </>
  );
}
