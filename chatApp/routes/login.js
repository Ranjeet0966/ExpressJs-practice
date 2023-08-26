const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.send(
    '<form action="/login" method="POST" ><input id="username" type="text" name="username"><button type="submit" id="btn">login</button></form><script>const username=document.getElementById("username"); const btn=document.getElementById("btn"); btn.addEventListener("click", ()=> localStorage.setItem("username",username.value))</script>'
  );
});
router.post("/login", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;