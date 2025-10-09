const mongoose = require("mongoose");

require("dotenv").config();

const url = process.env.MONGO_DB;

mongoose.connect(url);

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: [],
    },
    isadmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,
});


module.exports = mongoose.model("user", userSchema);