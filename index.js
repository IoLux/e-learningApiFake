import express from "express";
import * as data from "../json/postUser.json";
import * as user from "../json/user.json";

const app = express();
const port = 3000;

app.get("/postUser", (req, res) => {
  res.json(data.data);
});

app.get("/user", (req, res, next) => {
  res.json(user);
});

app.listen(port, () => {
  console.log("Hello");
});
