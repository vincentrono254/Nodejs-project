const User = require("../models/authoModel");
const createError = require("http-errors");
const { authSchema } = require("../helpers/validationSchema");
const {signAccessToken}= require('../helpers/')
// register
registerUser: async (req, res, next) => {
  try {
    //const { email, password} = req.body;
    //if (!email)
    const result = await authSchema.validateAsync(req.body);

    const Exists = await User.findOne({ email: email });

    if (Exists)
      throw createError.Conflict(`${email} is already been registered`);
    const user = new User(result);

    const savedUser = await user.save();
    const accessToken = await signAccessToken(savedUser.id)

    res.send({ accessToken });
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
};
