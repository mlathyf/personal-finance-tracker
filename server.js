const express = require("express");

// Creating an app
const app = express();

// registered middleware
app.use(express.static("public"));

// listen on port 3000
app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
