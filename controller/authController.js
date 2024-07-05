const User = require("../models/authoModel");
const createError = require("http-errors");
const { authSchema } = require("../helpers/validationSchema");
const { signAccessToken } = require("../helpers/jwtHelpers.Js");
const Joi = "joi";
// register
module.exports = {
  registerUser: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (email) {
        const result = await authSchema.validateAsync(req.body);

        const Exists = await User.findOne({ email: email });

        if (Exists)
          throw createError.Conflict(`${email} is already been registered`);
        const user = new User(result);

        const savedUser = await user.save();
        const accessToken = await signAccessToken(savedUser._id);

        res.send({
          message: "User Registered Successfuly",
          savedUser,
          accessToken,
        });
      }
    } catch (error) {
      if (error.isJoi === true) error.status = 422;
      next(error);
    }
  },
  //login validation
  login: async (req, res, next) => {
    try {
      const result = await authSchema.validateAsync(req.body);
      const user = await User.findOne({email: result.email})
      if(!user) throw createError.NotFound("User not registered")
        // matching the password
      const isMatch = await user.isValidPassword(result.password)
      if(!isMatch) throw createError.Unauthorized("username/password not valid")

        // password match the generate token
        const accessToken = await signAccessToken(user.id)
      res.send({accessToken});

    } catch (error) {
      if (error.isJoi === true)
        return next(createError.BadRequest("Invalid username/password"));
      next(error);
    }
  },
};
