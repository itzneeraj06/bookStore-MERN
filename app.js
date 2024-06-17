const express = require("express");
const user = require("./routes/user.js");
const book = require("./routes/book.js")

const app = express();

require("dotenv").config();
const port = parseInt(process.env.PORT);

require("./configure/config.js")

app.use(express.json());
app.use("/api/v1", user);
app.use("/api/v1", book);

app.listen(port, () => { console.log(`server started successfully at ${port}.`) });
