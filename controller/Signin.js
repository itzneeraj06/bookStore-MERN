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

                const payload = [
                    { name: checkuser.username },
                    { role: checkuser.role }
                ];


                //create token 
                const token = jwt.sign({ payload }, "bookstorekey", { expiresIn: "30d" })
                res.status(200).json({
                    message: "signin user success",
                    id: checkuser._id,//unique id
                    role: checkuser.role,
                    token: token
                })

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