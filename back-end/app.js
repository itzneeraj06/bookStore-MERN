const express = require("express");
const app = express();
const cors = require("cors")
const user = require("./routes/user.js");
const book = require("./routes/book.js")
const favourite = require("./routes/favourite.js")
const cart = require("./routes/cart.js")
const order = require("./routes/order.js")

require("dotenv").config();
// const port = parseInt(process.env.PORT)||4000;
const port = process.env.PORT||4000;

require("./configure/config.js")

app.use(cors())
app.use(express.json());
app.use("/api/v1", user);
app.use("/api/v1", book);
app.use("/api/v1", favourite);
app.use("/api/v1", cart);
app.use("/api/v1", order);

app.listen(port, () => { console.log(`server started successfully at ${port}.`) });
