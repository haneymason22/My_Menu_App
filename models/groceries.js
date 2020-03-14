const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
   name: { type: String, required: true },
   desciption: { type: String, required: true },
   ingredients: { type: Array, required: true },
   directions: { type: Array, required: true },
   date: { type: Date, default: Date.now }
});

const groceryItem = mongoose.model("groceryItem", grocerySchema);

module.exports = groceryItem;
