const mongoose = require("mongoose");
const Schema = mongoose.Schema;


 const serviceSchema = new mongoose.Schema({
  gameName: { type: String },
  yearsOfExperience: { type: Number, required: true },
  description: String,
  price: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // 👈
});


module.exports = mongoose.model("Service", serviceSchema);
