const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGODB_URL;
const dbg = require("debug")("development:mongoose");

console.log("hello");

mongoose
    .connect(url)
    .then(function () {
        dbg("connected");
    })
    .catch(function (err) {
        if (err) { dbg(err); }
    });

module.exports = mongoose.connection;