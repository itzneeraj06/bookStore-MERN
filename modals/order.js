const mongoose = require("mongoose")
const order = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: "books"
    },
    status: {
        type: String,
        default: "placed ?",
        enum: ["placed ?", "placed,out for delivery,delivered"]
    }
},
    { timestamps: true }
);
module.exports = mongoose.model("order", order);
