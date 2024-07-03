const User = require("../modals/users");
const bcrypt = require("bcrypt")

exports.Signup = async (req, res) => {
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

        // bss password ko encrypte kra hai or DB me hashPassword ko store kra hai
        const hashPassword = await bcrypt.hash(password, 10)

        //USER CREATE USING .CREATE FUNCTION
        const newUser = await User.create({
            username: username,
            email: email,
            password: hashPassword,
            address: address

        })
        return res.status(200).json({
            message: "signup successfull",
            data: newUser
        })

    } catch (error) {
        console.log(error);
    }

}