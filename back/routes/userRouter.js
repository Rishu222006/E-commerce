const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController.js");
const isLoggedIn = require("../middlewares/isLoggedIn.js");
const product_model = require("../models/product_model.js");


router.get("/", function (req, res) {
    res.send("hey its working");
});

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/shop", isLoggedIn, async (req, res) => {
    try {
        const products = await product_model.find({});

        res.render("shop", { products });
    } catch (err) {
        console.error(err);
        res.send("Something went wrong.");
    }
});


module.exports = router;