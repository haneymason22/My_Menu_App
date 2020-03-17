const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
   title: { type: String, required: true },
   calories: { type: Integer, required: true },
   ingredients: { type: Array, required: true },
   directions: { type: Array, required: true },
   date: { type: Date, default: Date.now }
});

const groceryItem = mongoose.model("groceryItem", grocerySchema);

module.exports = groceryItem;
