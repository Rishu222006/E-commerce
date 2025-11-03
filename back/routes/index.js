const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const { registerUser, loginUser } = require("../controllers/authController");
const router = express.Router();

router.get("/", function (req, res) {
    let error = req.flash("error");
    let success = req.flash("success")
    res.render("index", { error, success });
});

router.get("/shop", isLoggedIn, function (req, res) {
    res.render("shop");
});

router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;