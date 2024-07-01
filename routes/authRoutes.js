const express = require('express');
const routes = express.Router();
const authController = require("../controller/authController")

//register user
// routes.post('/registerUser', (req, res, next) => {
//   res.status(200).json({
// Message:'authController.register'
//   })
// });
 routes.post("/registerUser", authController.registerUser);

module.exports= routes;

