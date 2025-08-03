const mongoose = require("mongoose")

const coachDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "username is required"]
    },
    age: {
        type: Number,
        required: [true, "age is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
})



const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "username is required"]
    },
    password: {
        type: String,
        required: [true, "password is required "]
    },
    role: {
        type: String,
        enum: ["coach", "user"],
        default: "user"
    },
    details: coachDetailsSchema
})

const User = mongoose.model("User", userSchema)

module.exports = User