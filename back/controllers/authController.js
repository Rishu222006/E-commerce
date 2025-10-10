const user_model = require("../models/user_model.js");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken.js");


module.exports.registerUser = async function (req, res) {
    try {
        let { fullname, email, password } = req.body;

        let user = await user_model.findOne({ email: email });
        if (user) return res.status(401).send("user already have account.");

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return err.message;
                else {
                    let user = await user_model.create({
                        fullname,
                        email,
                        password: hash,
                    })

                    let token = generateToken(user);
                    res
                        .cookie("token", token)
                        .send("User created succesfully.");
                }
            })
        });


    } catch (err) {
        res
            .status(500)
            .send(err.message);
    }
};


module.exports.loginUser = async function (req, res) {
    let { email, password } = req.body;

    let user = await user_model.findOne({ email: email });

    if (!user) return res.send("Email or password incorrect.");

    bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
            let token = generateToken(user);
            res
                .cookie("token", token)
                .status(200)
                .send("you can login");
        } else {
            return res
                .status(401)
                .send("Email or password incorrect.");
        }
    })
}