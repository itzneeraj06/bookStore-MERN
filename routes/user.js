const express = require("express");
const router = express.Router();
const User = require("../modals/user");
const { Signup } = require("../controller/Signup");
const { Signin } = require("../controller/Signin");

router.post("/signup", Signup);
router.post("/signin", Signin);


module.exports = router;
