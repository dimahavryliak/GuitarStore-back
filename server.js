const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
require("dotenv").config();
require("./config/passportConfig");

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/products", require("./routes/productRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/auth", require("./routes/authRoutes")); // Add this line

app.listen(5000, () => console.log("Server running on port 5000"));
