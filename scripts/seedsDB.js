const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://mghaney7:MHane!952@ds263816.mlab.com:63816/heroku_d5wzktxm"
);

const grocerySeed = [
  {
    title: "Chicken Parmesan",
    diet: "Low-Carb",
    ingredients:
      ["1 cup panko bread crumbs, or more as needed",
 
        "½ cup grated Parmesan cheese",
         
        "2 tablespoons all-purpose flour, or more if needed",
         
        "1 cup olive oil for frying",
         
        "½ cup prepared tomato sauce",
         
        "¼ cup fresh mozzarella, cut into small cubes",
         
        "¼ cup chopped fresh basil",
         
        "½ cup grated provolone cheese",
         
        "¼ cup grated Parmesan cheese",
         
        "1 tablespoon olive oil"
    ],
    calories: 471,
    link: "https://www.allrecipes.com/recipe/223042/chicken-parmesan/",
    image: "https://www.spendwithpennies.com/wp-content/uploads/2018/11/SpendWithPennies-Chicken-Parmesan-24.jpg",
    date: new Date(Date.now())
  },
  {
    title: "Healing Cabbage Soup",
    diet: "Vegan",
    ingredients:
        [
            "3 tablespoons olive oil",

            "1/2 onion, chopped",
            
            "2 cloves garlicchopped",

            "2 quarts water",
            
            "4 teaspoons chicken bouillon granules",
            
            "1 teaspoon salt, or to taste",
            
            "1/2 teaspoon black pepper, or to taste",
            
            "1/2 head cabbage, cored and coarsely chopped",
            
            "1 (14.5 ounce) can Italian-style stewed tomatoes, drained and diced"
        ],
    calories: 82,
    link:"https://www.allrecipes.com/recipe/82923/healing-cabbage-soup/",
    image: "https://mealplannerpro.com/images/recipes/95/24899.jpg",
    date: new Date(Date.now())
  },
  {
    title: "Awesome Crispy Baked Chicken Wings",
    diet: "Low-Carb",
    ingredients:
        [
            "4 pounds chicken wings",
 
            "½ cup butter",
     
            "2 cloves garlic, minced",
     
            "1 cup grated Parmesan cheese",
     
            "1 tablespoon dried parsley",
     
            "1 tablespoon dried oregano",
     
            "2 teaspoons ground paprika",
     
            "1 teaspoon salt",
     
            "½ teaspoon ground black pepper"
        ],
    calories: 233,
    link: "https://www.allrecipes.com/recipe/256752/awesome-crispy-baked-chicken-wings/",
    image: "https://images.media-allrecipes.com/userphotos/4459106.jpg",
    date: new Date(Date.now())
  },
];
  

db.groceryItem
  .remove({})
  .then(() => db.groceryItem.collection.insertMany(grocerySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
