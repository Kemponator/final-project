const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8080;

app.get("/", (request, response) => {
  response.status(200).json("Hey, you made it!");
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
