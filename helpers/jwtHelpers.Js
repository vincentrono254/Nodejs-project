const JWT = require("jsonwebtoken");
const createError = require("http-errors");
const User = require("../models/User.model");

module.exports = {
  singAccessToken: (UserId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: "1h",
        issuer: "EddTechnologies.com",
        audience: UserId,
      };
      JWT.sign(payload, secret, options, (error, token) => {
        if (error) {
          console.log(error.message);
          reject(createError.InternalServerError());
        }
        resolve(token)
      });
    });
  },
};
