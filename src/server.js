import express from "express";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home", {
  pageTitle: 'home'
}));
app.get("/friends", (req, res) => res.render("friends", {
  pageTitle: 'friends'
}));
app.get("/chats", (req, res) => res.render("chats", {
  pageTitle: 'chats'
}));
app.get("/chat/:nickName", (req, res) => {
  const nickName = req.params.nickName;
  console.log(nickName);
  res.render("chat", {
    pageTitle: 'chat',
    nickName 
  })}
);
app.get("/find", (req, res) => res.render("find", {
  pageTitle: 'find'
}));
app.get("/more", (req, res) => res.render("more", {
  pageTitle: 'more'
}));
app.get("/setting", (req, res) => res.render("setting", {
  pageTitle: 'setting'
}));
app.get("/*", (req, res) => res.redirect("/"));

const handleListening = () =>
  console.log(`Server running: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
