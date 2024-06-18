const router = require("express").Router();
const { authenticationToken } = require("../controller/userAuth");
const { placeOrder, orderHistory, updateStatus } = require("../controller/Order");

router.post("/placeorder", authenticationToken, placeOrder);
router.get("/orderhistory", authenticationToken, orderHistory);
router.put("/updatestatus/:id", authenticationToken, updateStatus);

module.exports = router;
