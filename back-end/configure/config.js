const mongoose = require("mongoose");

require("dotenv").config();

const config = () => {
    // Connecting to the database using the provided URL from the environment variables
    mongoose
        .connect(process.env.URL)
        // If the connection is successful, log a success message
        .then(() => console.log("DB CONNECTION SUCCESS"))
        // If there are issues connecting to the database, log an error message and exit the process
        .catch((err) => {
            console.log(`DB CONNECTION ISSUES`);
            console.error(err.message);
            process.exit(1);
        });
};
config();