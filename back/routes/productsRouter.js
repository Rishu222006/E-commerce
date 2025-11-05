const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const product_model = require("../models/product_model");

router.post("/create", upload.single("image"), async function (req, res) {
    try {
        let { name,
            image, price, discount, bgColor, panelColor, textColor } = req.body;

        let product = await product_model.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            bgColor,
            panelColor,
            textColor
        });
        req.flash("success", "Product created successfully.");
        res.redirect("/owners/admin");
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;