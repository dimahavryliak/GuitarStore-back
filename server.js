const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", require("./routes/productRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
