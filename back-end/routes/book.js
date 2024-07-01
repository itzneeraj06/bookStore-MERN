const router = require("express").Router();
const jwt = require("jsonwebtoken")
const { authenticationToken } = require("../controller/userAuth");
const { GetbookbyId, Getbooks, Deletebook, Updatebook, Addbook, Getrecentbooks } = require("../controller/Book");

//routes
router.post("/addbook", authenticationToken, Addbook);
router.put("/updatebook", authenticationToken, Updatebook);
router.put("/deletebook", authenticationToken, Deletebook);
router.get("/getallbooks", Getbooks);
router.get("/getbook/:id", GetbookbyId);
router.get("/getrecentbooks",Getrecentbooks)

module.exports = router;