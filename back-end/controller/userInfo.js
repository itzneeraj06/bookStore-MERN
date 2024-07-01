const User = require("../modals/users");

exports.userInfo = async (req, res) => {
    try {
        const { id } = req.headers;
        const data = await User.findById(id).select("-password");
        return res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ message: "check userinfo" })

    }

}
