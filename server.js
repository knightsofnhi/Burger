const express = require("express");
const app = express();
const route = require("./controllers/burgers_controllers");
const PORT = 3000;
app.use(route);
app.listen(PORT)
