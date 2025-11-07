const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const { registerUser, loginUser, logOut } = require("../controllers/authController");
const product_model = require("../models/product_model");
const user_model = require("../models/user_model");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", function (req, res) {
    let error = req.flash("error");
    let success = req.flash("success")
    res.render("index", { error, success, loggedIn: false });
});

router.get("/shop", isLoggedIn, async function (req, res) {
    let product = await product_model.find();
    let success = req.flash("success");
    res.render("shop", { product, success });
});

router.get("/addtocart/:productid", isLoggedIn, async function (req, res) {
    let user = await user_model.findOne({ email: req.user.email });
    user.cart.push(new mongoose.Types.ObjectId(req.params.productid));
    await user.save();
    req.flash("success", "Added to cart successfully.");
    res.redirect("/users/shop");
});


router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/logout", logOut);

module.exports = router;