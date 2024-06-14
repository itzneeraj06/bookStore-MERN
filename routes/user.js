const express = require("express");
const router = express.Router();
const User = require("../modals/user")

router.post("/signup", async (req, res) => {
    try {
        const { username, email, password, address } = req.body;
        const alreadyUser = await User.findOne({ username: username }); //first username key h or second wla username variables se value fetch karega
        if (alreadyUser) {
            return res.status(400).json(
                {
                    message: "already exists Username"
                }
            )
        }
        const alreadyEmail = await User.findOne({ email: email });
        if (alreadyEmail) {
            return res.status(400).json(
                {
                    message: "already exists Email"
                }
            )
        }
        if (password.length <= 4) {
            return res.status(400).json({ message: "password is too short" })
        }

        //USER CREATE USING .CREATE FUNCTION
        const newUser = await User.create({
            username,
            email,
            password,
            address

        })
        return res.status(200).json({
            message: "signup successfull"
        })

    } catch (error) {
        console.log(error);
    }

})

module.exports = router;
