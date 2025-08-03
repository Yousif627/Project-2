const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
},
  gameName: {String},
  gameExperience: {String},
  description: {String},
  price: {Number}
});

module.exports = mongoose.model("Service", serviceSchema);
