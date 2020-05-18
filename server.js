const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Setting up connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Checking connection
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
});

//ROUTES
const authRoutes = require("./routes/auth");

//Routes middleware
app.use("/user", authRoutes);

//Listener
app.listen(port, () => {
  console.log("Server is running in port " + port);
});
