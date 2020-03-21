const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/groceryList"
);

const grocerySeed = [
  {
    title: "Chicken Parmesan",
    calories: 471,
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
    directions:
        ["Preheat an oven to 450 degrees F (230 degrees C).",

           "Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper.",
           
           "Beat eggs in a shallow bowl and set aside.",
           
           "Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside.",
           
           "Place flour in a sifter or strainer; sprinkle over chicken breasts, evenly coating both sides.",
           
           "Dip flour coated chicken breast in beaten eggs. Transfer breast to breadcrumb mixture, pressing the crumbs into both sides. Repeat for each breast. Set aside breaded chicken breasts for about 15 minutes.",
           
           "Heat 1 cup olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken until golden, about 2 minutes on each side. The chicken will finish cooking in the oven.",
           
           "Place chicken in a baking dish and top each breast with about 1/3 cup of tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle 1 to 2 tablespoons of Parmesan cheese on top and drizzle with 1 tablespoon olive oil.",
           
           "Bake in the preheated oven until cheese is browned and bubbly, and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C)."
        ],
    date: new Date(Date.now())
  },
  {
    title: "Healing Cabbage Soup",
    calories: 82,
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
      directions:
        [
            "In a large stockpot, heat olive oil over medium heat. Stir in onion and garlic; cook until onion is transparent, about 5 minutes.",

            "Stir in water, bouillon, salt, and pepper. Bring to a boil, then stir in cabbage. Simmer until cabbage wilts, about 10 minutes.",

            "Stir in tomatoes. Return to a boil, then simmer 15 to 30 minutes, stirring often.]"
        ],
    date: new Date(Date.now())
  },
  {
    title: "Awesome Crispy Baked Chicken Wings",
    calories: 233,
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
    directions:
        [
            "Preheat oven to 350 degrees F (175 degrees C). Line a shallow baking dish with aluminum foil and grease lightly.",

           "Cut tips from chicken wings and discard. Cut between the joint to separate each wing into 2 pieces.",
           
           "Combine butter and garlic in a small saucepan over low heat; heat until butter is melted and garlic is fragrant, 3 to 5 minutes.",
           
           "Mix Parmesan cheese, parsley, oregano, paprika, salt, and pepper together in a shallow bowl.",
           
           "Dip chicken wing pieces in melted butter mixture; coat with Parmesan cheese mixture in the bowl. Arrange in the prepared baking dish. Drizzle any remaining butter on top.",
           
           "Bake in the preheated oven until skin is browned and juices run clear, about 1 hour."
        ],
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
