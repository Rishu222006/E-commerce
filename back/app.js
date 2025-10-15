require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");

// 🧠 Import Routers
const ownersRouter = require("./routes/ownerRouter.js");

// 🧱 Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET || "secret123"
    })
);
app.use(flash());

// ⚙️ View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Mount Routers
app.use("/owners", ownersRouter);

// 🏠 Default Route
app.get("/", (req, res) => {
    res.send("Home Page — go to /owners/shop");
});

// 🚀 Start Server
app.listen(2000, () => {
    console.log("✅ Server running on http://localhost:2000");
});
