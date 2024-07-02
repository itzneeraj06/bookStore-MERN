const Order = require("../modals/orders")
const User = require("../modals/users")

exports.placeOrder = async (req, res) => {
    try {
        const { id } = req.headers;
        const { order } = req.body;

        //loop isliye lagaya hai yadi ek se jyaada order hue toh iterate hoga 
        for (const orderData of order) {
            const newOrder = new Order({ user: id, book: orderData._id });
            const orderDataFromDb = await newOrder.save();

            //user ke schema me order ki value update kri 
            await User.findByIdAndUpdate(id, { $push: { order: orderDataFromDb._id } })

            //user ke schema me se cart ki value update kri
            await User.findByIdAndUpdate(id, { $pull: { cart: orderData._id } })




        }
        return res.json({
            status: "Success",
            message: "order placed"
        })



    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "failed to place order" })
    }



}

exports.orderHistory = async (req, res) => {


    try {
        const { id } = req.headers;
        // yha pr chaining ho rhi h user->order->book 
        const userData = await User.findById(id).populate(
            {
                path: "order",
                populate: { path: "book" }
            }
        );
        const ordersData = userData.order
        // console.log(ordersData);

        return res.json({
            status: "success",
            data: ordersData
        })


    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "failed to load orders" })
    }

}

exports.updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        await Order.findByIdAndUpdate(id, {
            status: req.body.status
        })
        return res.json({
            status: "success",
            mesage: "order status updated"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "failed"
        })
    }
}

exports.getAllOrders = async (req, res) => {

    const { id } = req.headers;
    const userData = await Order.find().populate("user").populate("book").sort({ createdAt: -1 })


    return res.status(200).json({
        data: userData,
    })
}