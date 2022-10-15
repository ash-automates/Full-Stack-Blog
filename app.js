const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogsRouter = require("./routes/blogsRoutes");
require("dotenv").config();

// settings
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// mongoDB
const connection = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASS}@cluster0.4p3upij.mongodb.net/${process.env.ATLAS_DB}?retryWrites=true&w=majority`;
mongoose.connect(connection).then((result) => {
  app.listen(8000);
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About me" });
});

app.use("/blogs", blogsRouter);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
