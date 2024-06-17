const router = require("express").Router();
const jwt = require("jsonwebtoken")
const { authenticationToken } = require("../controller/userAuth");
const { Addbook } = require("../controller/Addbook");
const { Updatebook } = require("../controller/Updatebook");
const { Deletebook } = require("../controller/Deletebook");

router.post("/addbook", authenticationToken, Addbook);
router.put("/updatebook", authenticationToken, Updatebook);
router.delete("/deletebook", authenticationToken, Deletebook);

module.exports = router;