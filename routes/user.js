const express = require("express");
const router = express.Router();
const User = require("../modals/user");
const { Signup } = require("../controller/Signup");
const { Signin } = require("../controller/Signin");
const { Userinfo } = require("../controller/Userinfo");
const { authenticationToken } = require("../controller/userAuth");

router.post("/signup", Signup);
router.post("/signin", Signin);
router.get("/getuserinfo", authenticationToken, Userinfo);//check authentication and authorization for protected route


module.exports = router;
