const express = require("express");

const port = process.env.PORT || 5000;
const app = express();

const server = require("http").createServer(app);

// Start the Local Server
server.listen(port, () => {
  console.log(`BestHandymanEver app listening at http://localhost:${port}`);
});
