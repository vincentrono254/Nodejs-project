const express = require('express');
const routes = express.Router();
const authController = require("../controller/authController")

//register user
routes.post('/', (req, res, next) => {
  res.status(200).json({
Message:'authController.regist'
  })
});
// routes.post("/registerUser", authController.registerUser);

module.exports= routes;

