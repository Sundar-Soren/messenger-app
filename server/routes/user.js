const express = require("express");
const { register, login, getUser } = require("../controllers/user");

const router = express.Router();

//Auth

router.post("/signup", register);
router.post("/login", login);

//USER

router.get("/user", getUser);

module.exports = router;
