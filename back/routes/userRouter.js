const express = require("express");
const router = express.Router();
const product_model = require("../models/product_model.js");

router.get("/", (req, res) => {
    res.send("works");
});

router.get("/shop", async (req, res) => {
    try {
        const products = await product_model.find({});
        res.render("shop", { products });
    } catch (err) {
        console.error("Error loading products:", err);
        res.status(500).send("Something went wrong.");
    }
});


module.exports = router;
