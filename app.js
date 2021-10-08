const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.listen(5000, () => console.log("Server started"));

app.use(require("morgan")("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./static"));

app.use("/items", require("./routers/itemRouter"));
