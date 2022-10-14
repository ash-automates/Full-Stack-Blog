const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
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

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/blogs/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.render("details", { title: "Blog Details", blog: result });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
