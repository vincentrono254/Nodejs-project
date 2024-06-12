const express = require('express');
const routes = require("./routes/api");
require ('dotenv').config()
require ('./helpers/init_mongodb')

const app = express();
app.use(routes);
app.listen(process.env.port || 4000, function () {
  console.log("Now listening for request on:http://localhost:4000");
});
