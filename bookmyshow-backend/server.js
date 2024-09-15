require("dotenv").config();
const express = require("express");
const app = express();
const { connection } = require("./db/connection");
const cors = require("cors");
const bodyParser = require("body-parser");


const bookingRoute = require("./Routes/movieRoute");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Connect to the database
connection(); // This will connect to the database and handle errors internally

// Creating an API and separating it
app.get("/", (req, res) => {
  res.send("Hi, I am the home page");
});
app.use("/api", bookingRoute);

// Listening backend on a port
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
