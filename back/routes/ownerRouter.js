const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner_model.js")
require("dotenv").config();


router.get("/", function (req, res) {
    res.send("hey");
    console.log(process.env.NODE_ENV);
});

if (process.env.NODE_ENV === "development") {
    router.post("/created", async function (req, res) {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res
                .status(503);
        };

        let { fullname, email, password } = req.body;

        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        });

        res
            .status(201)
            .send(createdOwner);
    });
}

module.exports = router;