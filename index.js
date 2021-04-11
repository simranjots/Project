const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 9000;
// static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/images"));
app.use("/css", express.static(__dirname + "node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "node_modules/bootstrap/dist/js"));
app.use("/js", express.static(__dirname + "node_modules/jquery/dist"));

// set Views
app.set("views", "./views");
app.use(expressLayouts);
app.set("layout", "./layouts/full-width");
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.render("index", { title: "HomePage" });
});
app.set("layout", "./layouts/full-width");
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
    layout: "./layouts/sidebar",
  });
});

//Litsen
app.listen(port, () => console.info(`Listen on port ${port}`));
