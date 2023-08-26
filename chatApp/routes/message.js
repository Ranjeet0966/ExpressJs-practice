const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile("message.txt", (err, data) => {
    res.send(
      `${data}<form action="/message" method="POST"><input name="message" type="text"><input type="hidden" name="username" id="username" ><button type="submit">send message</button></form><script>const username=document.getElementById("username"); username.value=localStorage.getItem("username")</script>`
    );
  });
});

router.post("/message", (req, res, next) => {
  fs.appendFile(
    "message.txt",
    `${req.body.username}:${req.body.message} `,
    (err) => {}
  );
  res.redirect("/");
});

module.exports = router;