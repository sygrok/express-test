const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/users/", require("./routes/usersRoute"));

app.use("/api", apiRoutes);

app.listen(3001, function () {
  console.log("listening on 3001");
});
