const books = require("../modals/books");
const User = require("../modals/user")
exports.Addbook = async (req, res) => {
    try {
        const id = req.headers["id"];
        // const {id}=req.headers;=> same same 
        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        if (user.role !== "admin") {
            console.log(user.role);
            return res.status(400).json({ message: "access denied need admin permission " })

        }
        const book = new books({
            url: req.body.url,
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            desc: req.body.desc,
            language: req.body.language
        })
        const db = await book.save();
        res.status(200).json({
            message: "books added in the DB."
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error" })
    }

}