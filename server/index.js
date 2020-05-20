const dotenv = require("dotenv");
dotenv.config();
var cors = require("cors");
const express = require("express");
const app = express();

var http = require("http");
const PORT = process.env.PORT || 3005;

var bodyParser = require("body-parser");

const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

var routes = require("./api/ruotes/WeTubeRoutes"); //importing routes
routes(app); //register the routes

server.listen(PORT, () => {
  console.log("listening on *:3005");
});
