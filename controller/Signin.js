const User = require("../modals/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.Signin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const checkuser = await User.findOne({ username });
        if (!checkuser) {
            res.status(400).json({ message: "username not found" });

        }
        //compare encrypte password
        bcrypt.compare(password, checkuser.password, (err, data) => {
            if (data) {

                const authClaims=[{name:checkuser.username},
                    {role:exting}
                ]

                const token = jwt.sign({ authClaims }, "bookstorekey", { expiresIn: "30d" })
                res.status(200).json({ message: "signin user success" })

            }
            else {
                res.status(400).json({ message: "signin user failed-password not match" })

            }
        }

        )
    }

    catch (error) {
        console.log("check Signin Controller");
        console.log(error);
    }

}