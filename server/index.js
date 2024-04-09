const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const usersRoute = require("./routes/users.route.js");
const updateProfileRoute = require("./routes/updateProfile.js");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://dribbble-clone.onrender.com/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

app.use("/", usersRoute);
app.use("/api/update-profile", updateProfileRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
