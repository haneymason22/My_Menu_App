const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
   title: { type: String, required: true },
   diet: { type: String, required: true },
   ingredients: { type: Array, required: true },
   calories: { type: Number, required: true },
   link: { type: String, required: true },
   image: { type: String },
   date: { type: Date, default: Date.now }
});

const groceryItem = mongoose.model("groceryItem", grocerySchema);

module.exports = groceryItem;
