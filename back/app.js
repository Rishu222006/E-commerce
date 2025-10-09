require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/mongoose-connection");

const ownersRouter = require("./routes/ownerRouter.js");
const usersRouter = require("./routes/userRouter.js");
const productsRouter = require("./routes/productsRouter.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the backend server 😎");
});

app.listen(2000, () => {
    console.log("✅ Server running on http://localhost:2000");
    console.log(process.env.NODE_ENV);
});
