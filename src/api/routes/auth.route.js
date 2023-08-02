const {Router} = require("express");
const {login, register, addvideo} = require("../controllers/auth.controller");

const router = Router();

router.post("/auth/login", login);
router.post("/auth/register", register);
router.post("/auth/addvideo", addvideo);

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/addvideo", (req, res) => {
  res.render("addvideo");
});
module.exports = router;
