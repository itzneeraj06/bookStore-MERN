const User = require("../modals/users")
exports.addtocart = async (req, res) => {
    try {
        const { bookid, id } = req.headers;
        const userData = await User.findById(id);
        const isInCart = userData.cart.includes(bookid);
        if (isInCart) {
            return res.status(200).json({ message: "already in cart" })

        }
        await User.findByIdAndUpdate(id, { $push: { cart: bookid } })
        res.status(200).json({ message: "added in cart" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "failed to add in cart" })
    }
}

exports.removetocart = async (req, res) => {
    try {
        const { id } = req.headers;
        const { bookid } = req.params;
        const userData = await User.findById(id);
        const isInCart = userData.cart.includes(bookid);
        if (isInCart) {
            await User.findByIdAndUpdate(id, { $pull: { cart: bookid } })
            res.status(200).json({ message: "removed item from cart" })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "failed to remove in cart" })
    }
}

exports.getusercart = async (req, res) => {
    const { id } = req.headers;
    const userData = await User.findById(id).populate("cart");
    const cart = userData.cart.reverse();
    return res.status(200).json({
        data: cart,
    })
}