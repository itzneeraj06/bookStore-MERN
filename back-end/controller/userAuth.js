const jwt = require("jsonwebtoken")

const authenticationToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];//header se token liya h "Bearer aw2ekelnfejfndfjnfdnxfxnfd" or Bearer ko trim kr diya h  or shorthand bhi use kra h 

    if (token == null) {
        return res.status(400).json({
            message: "authentication token required"
        })
    }
    jwt.verify(token, "bookstorekey", (err, user) => {
        if (err) {
            return res.status(403).json({
                message: "token expired or doesnt valid"
            });
        }
        req.user = user;
        next();
    })

}
module.exports = { authenticationToken };
//check authentication and authorization for protected route <=========