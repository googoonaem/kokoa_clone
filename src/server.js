import express from "express";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/friends", (req, res) => res.render("friends"));
app.get("/chats", (req, res) => res.render("chats"));
app.get("/find", (req, res) => res.render("find"));
app.get("/more", (req, res) => res.render("more"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListening = () =>
  console.log(`Server running: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
