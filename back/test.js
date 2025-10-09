const mongoose = require("mongoose");
require("dotenv").config();  // ✅ must come BEFORE using process.env

const uri = process.env.MONGODB_URL;
console.log("Connecting to:", uri);  // debug line to confirm it’s loading

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
