require("dotenv").config();
require("./config/mongoose-connection.js");
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");

// 🧠 Import Routers
const ownersRouter = require("./routes/ownerRouter.js");
const indexRouter = require("./routes/index.js");
const userRouter = require("./routes/userRouter.js");
const productsRouter = require("./routes/productsRouter.js");

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
app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/products", productsRouter);

// 🚀 Start Server
app.listen(2000, () => {
    console.log("✅ Server running on http://localhost:2000");
});
