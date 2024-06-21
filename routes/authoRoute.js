const express = require('express');
const routes = express.Router();

const authoController = require("../controller/authoConroller")

//register user
routes.post('/registerUser',authoController.registerUser)


module.exports= routes;

