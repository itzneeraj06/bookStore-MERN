const router = require("express").Router();
const { addtocart, removetocart } = require("../controller/Cart");
const { authenticationToken } = require("../controller/userAuth");

router.put("/addtocart", authenticationToken, addtocart)
router.put("/removetocart", authenticationToken, removetocart)

module.exports = router;
