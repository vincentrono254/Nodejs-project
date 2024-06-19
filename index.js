const express = require('express');
const routes = require("./routes/studentRoute");

require ('dotenv').config()
require ('./helpers/init_mongodb')

const app = express();
//setup middlewares
app.use(express.json());
app.use(routes);
app.listen(process.env.port || 4000, function () {
  console.log("Now listening for request on:http://localhost:4000");
});
 //handling 404 error
  app.use((req,res, next)=>{
    const err = new Error("Not Found");
    
  })
