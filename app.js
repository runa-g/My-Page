const http = require("http");
const path = require("path");
const express = require("express");

const port = 8080;

const app = express();
app.use("/static", express.static(path.join(__dirname, "static")));

app.set("views", path.join(__dirname, "templates"));
app.set('view engine', 'ejs');

app.engine('ejs', require('ejs').__express);

app.get("/", (req, res) => {
    return res.render("index", { title: "Hello world" });
});

const server = http.createServer(app);

server.listen(port);