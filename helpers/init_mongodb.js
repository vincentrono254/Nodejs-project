const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, { studentAPI: process.env.studentAPI })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log(err.message));
