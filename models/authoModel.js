
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let authoSchema = new Schema({
    email: {
        type: String,
        required:true,
        unique: true,
        max:255
    },
    password:{
        type: String,
        required: true,
        min:10
    }
})
const User = mongoose.model("User", authoSchema);
module.exports = User;
