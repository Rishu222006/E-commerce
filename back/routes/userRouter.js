const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const product_model = require("../models/product_model.js");
const user_model = require("../models/user_model.js");
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/shop", async (req, res) => {
    try {
        const product = await product_model.find();
        let success = req.flash("success");
        res.render("shop", { product, success });
    } catch (err) {
        console.error("Error loading products:", err);
        res.status(500).send("Something went wrong.");
    }
});

router.get("/addtocart/:productid", isLoggedIn, async function (req, res) {
    let user = await user_model.findOne({ email: req.user.email });
    user.cart.push(new mongoose.Types.ObjectId(req.params.productid));
    await user.save();
    req.flash("success", "Added to cart successfully.");
    res.redirect("/users/shop");
});

router.get("/cart", isLoggedIn, async function (req, res) {
    let user = await user_model
        .findOne({ email: req.user.email })
        .populate("cart");

    let total = user.cart[0].price + 20 - user.cart[0].discount;
    res.render("cart", { user, total });
});


module.exports = router;
