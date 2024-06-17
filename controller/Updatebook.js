const books = require("../modals/books");
const User = require("../modals/user")
exports.Updatebook = async (req, res) => {
    try {

        // const id = req.headers["id"];
        const bookid = req.headers["bookid"];
        // const {id}=req.headers;=> same same 
        // const user = await User.findById(id);
        // if (!user) {
        //     return res.status(400).json({ message: "Invalid user ID" });
        // }
        // if (user.role !== "admin") {
        //     console.log(user.role);
        //     return res.status(400).json({ message: "access denied need admin permission " })

        // }
        await books.findByIdAndUpdate(bookid,
            {
                price: req.body.price,
             }

        )


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error" })
    }

}