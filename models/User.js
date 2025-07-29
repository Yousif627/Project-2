const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

        username:{
            type:String,
            required:[true, "username is required"]
        }, 
        password:{
            required:[true, "password is required "]
        }


})

const User = mongoose.model("User", userSchema)

module.exports = User