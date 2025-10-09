const mongoose = require("mongoose");

require("dotenv").config();

const url = process.env.MONGODB_URL;

mongoose
    .connect(url)
    .then(function () {
        console.log("connected");
    })
    .catch(function (err) {
        if (err) { console.error(err); }
    })

module.exports = mongoose.connection;