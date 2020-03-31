import axios from "axios";

export default {
  getRecipes: function (query) {
     return axios.get(`https://api.edamam.com/search?q=${query}`);
  },
  
  deleteRecipe: function (id) {
    return axios.delete("/api/recipes/" + id).then(result => result.data);
  },
  
  saveRecipe: function (recipeData) {
    return axios.post("/api/recipes", recipeData).then(result => result.data);
  },
  
  savedRecipes: function () {
    return axios.get("/api/recipes").then(result => result.data);
  }
};