const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
   title: { type: String, required: true },
   calories: { type: Number, required: true },
   ingredients: { type: [String], required: true },
   directions: { type: [String], required: true },
   date: { type: Date, default: Date.now }
});

const groceryItem = mongoose.model("groceryItem", grocerySchema);

module.exports = groceryItem;
