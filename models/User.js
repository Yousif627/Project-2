const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

        Username:{
            type:String,
            required:[true, "username is required"]
        }, 
        Password:{
            type:String,
            required:[true, "password is required "]
        }


})

const User = mongoose.model("User", userSchema)

module.exports = User