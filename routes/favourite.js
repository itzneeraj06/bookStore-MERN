const express = require("express");
const router = express.Router();
const { authenticationToken } = require("../controller/userAuth.js");
const { addFavourite, removeFavourite,getFavBooks } = require("../controller/Favourite.js");

router.put("/addfav", authenticationToken, addFavourite)
router.put("/removefav", authenticationToken, removeFavourite)
router.get("/getfavbooks",authenticationToken,getFavBooks)
module.exports = router;
