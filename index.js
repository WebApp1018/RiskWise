const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");

const port = process.env.PORT || 5000;
const app = express();

// General middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
app.use("/public", express.static("public"));

// // Serve static files from the 'build' folder
// app.use(express.static(path.join(__dirname, "riskwise/build")));

// // Handle other requests by serving the index.html file
// app.get("*", (req, res) => {
//   console.log("123123");
//   res.sendFile(path.join(__dirname, "riskwise/build/index.html"));
// });

const server = require("http").createServer(app);

// Start the Local Server
server.listen(port, () => {
  console.log(`RiskWise app listening at http://localhost:${port}`);
});
