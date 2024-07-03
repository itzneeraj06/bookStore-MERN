const books = require("../modals/books");
const User = require("../modals/users")
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
exports.Deletebook = async (req, res) => {
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

        await books.findByIdAndDelete(id)
        res.status(200).json({
            message: "data deleted."
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error" })
    }

}
exports.Updatebook = async (req, res) => {
    try {

        const id = req.headers["id"];
        const bookid = req.headers["bookid"];
        // const {id}=req.headers;=> same same 
        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        if (user.role !== "admin") {
            console.log(user.role);
            return res.status(400).json({ message: "access denied need admin permission " })

        }
        await books.findByIdAndUpdate(bookid,
            {
                url: req.body.url,
                title: req.body.title,
                author: req.body.author,
                price: req.body.price,
                desc: req.body.desc,
                language: req.body.language
            }

        )
        return res.status(200).json({
            message: "update successfull"
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error" })
    }

}
exports.Getbooks = async (req, res) => {
    try {
        const book = await books.find();
        const latestbook = book.reverse();
        return res.json({
            status: "success",
            data: latestbook
        })
    } catch (error) {
        return res.status(500).json({ message: "failed to fetch all books" })
    }
}
exports.GetbookbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await books.findById(id);
        return res.status(200).json({
            data: book
        })
    } catch (error) {
        return res.status(500).json({
            message: "failed to fetch check obj id"
        })
    }
}
exports.Getrecentbooks = async (req, res) => {
    try {
        const book = await books.find().sort({ createdAt: -1 }).limit(4);
        return res.json({
            status: "success",
            data: book
        })
    } catch (error) {
        return res.status(500).json({ message: "failed to fetch recent books" })
    }
}