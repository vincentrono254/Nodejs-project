
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');



const authSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true,'password is required'],
    // min:10
  },
});
// hasshing the pwd before sving in the database
// this function will be called be4 saving the userC
authSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPwd = await bcrypt.hash(this.password, salt)
        this.password = hashedPwd
        next()
    } catch(error){
        next(error)
    }
})

const User = mongoose.model("Auth", authSchema);
module.exports = User;

