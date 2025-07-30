const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    creator: String,
    content: String,
}, { timestamps: true })





const coachSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "username is required"]
    },
    Age: {
        type: Number,
        required: [true, "age is required"]
    },
    Price: {
        type: Number,
        min: 0,
        max: 100,
        required: [true, "Price is required"]
    },
    Description: {
        type: String,
        required: [true, "Description is required"]
    } ,
    comments: [commentSchema]
})

const Coach = mongoose.model("Coach", coachSchema)

module.exports = Coach