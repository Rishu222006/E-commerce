const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const { registerUser, loginUser, logOut } = require("../controllers/authController");
const product_model = require("../models/product_model");
const router = express.Router();

router.get("/", function (req, res) {
    let error = req.flash("error");
    let success = req.flash("success")
    res.render("index", { error, success });
});

router.get("/shop", isLoggedIn, async function (req, res) {
    let product = await product_model.find();
    res.render("shop", { product });
});

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/logout", logOut);

module.exports = router;