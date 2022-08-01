const express = require("express");
const app = express();

//Add the public folder to the web server, accessible through /static
app.use("/static", express.static("public")); 

app.listen(5001, () => {

  console.log("Listening on port 5001");

});

// Use node src/server.js to run app
// http://localhost:5001/static
