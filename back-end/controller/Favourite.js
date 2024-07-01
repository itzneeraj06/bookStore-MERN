const User = require("../modals/users")


exports.addFavourite = async (req, res) => {
    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isFav = userData.fav.includes(bookid);
        if (isFav) {
            return res.status(200).json({ message: "already exists" })

        }
        await User.findByIdAndUpdate(id, { $push: { fav: bookid } })
        res.status(200).json({ message: "added" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "failed to add in fav" })
    }
}


exports.removeFavourite = async (req, res) => {
    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isFav = userData.fav.includes(bookid);
        if (isFav) {
            await User.findByIdAndUpdate(id, { $pull: { fav: bookid } })
            res.status(200).json({ message: "remove from favourites" })

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "failed to remove in fav" })
    }
}

exports.getFavBooks = async (req, res) => {

    const { id } = req.headers;
    const userData = await User.findById(id).populate("fav");
    const favBooks = userData.fav;

    return res.status(200).json({
        data: favBooks,
    })
}