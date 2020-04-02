import React, { useEffect, useState } from "react";
import Text from "../components/Text";
// import Results from "../components/Results";


const Recipe = () => {
       const APP_ID = "76ee5205";
       const APP_KEY = "52a0fcb8039096d6fc09d45afd8c1119";
    
       const [recipes, setRecipes] = useState([]);
       const [search, setSearch] = useState("");
       const [query, setQuery] = useState("");
    
       useEffect(() => {
         getRecipes();
       }, [query]);
    
       const getRecipes = async () => {
         const response = await fetch(
           `https:api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
         );
         const data = await response.json();
         setRecipes(data.hits);
         setSearch("");
         console.log(data.hits);
       };
    
       const updateSearch = e => {
         setSearch(e.target.value);
       };
    
       const getSearch = e => {
         e.preventDefault();
         setQuery(search);
       };
    
       return (
        
        <div className="App">
        <h1 className = "header">Search for and Save Recipes of Interest:</h1>
          <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch} />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
          <div className ="recipes">
          {recipes.map(recipe => (
            <Text
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              dietLabels={recipe.recipe.dietLabels}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              link={recipe.recipe.url}
            />
          ))}
          
          </div>
        </div>
      );
};

export default Recipe;

// import React from "react";
// import Form from "../components/Form";
// import Results from "../components/Results";
// import API from "../utils/API";


// class Recipe extends React.Component {
//     state = {
//         value: "",
//         recipes: []
//     };

//     componentDidMount() {
//         this.searchRecipe();
//     }

//     makeRecipe = recipeData => {
//         return {
//             _id: recipeData.id,
//             title: recipeData.label,
//             diet: recipeData.dietLabels,
//             calories: recipeData.calories,
//             image: recipeData.image,
//             ingredients: recipeData.ingredients
//         }
//     }

//     searchRecipe = query => {
//         API.getRecipe(query)
//             .then(res => this.setState({ recipes: res.data.items.map(recipeData => this.makeRecipe(recipeData)) }))
//             .catch(err => console.error(err));
//     };

//     handleInputChange = event => {
//         const name = event.target.name;
//         const value = event.target.value;
//         this.setState({
//             [name]: value
//         });
//     };

//     handleFormSubmit = event => {
//         event.preventDefault();
//         this.searchRecipe(this.state.search);
//     };

//     render() {
//         return (
//             <div>
//                 <Form
//                     search={this.state.search}
//                     handleInputChange={this.handleInputChange}
//                     handleFormSubmit={this.handleFormSubmit}
//                 />
//                 <div className="container">
//                     <h2>Results</h2>
//                     <Results recipes={this.state.recipes} />
//                 </div>
//             </div>
//         )
//     }
// }

// export default Recipe;

//   const Recipe = ({title,calories,image,ingredients}) => {
//       return (
//          <div className={style.recipe}>
//              <h3>{title}</h3>
//              <ol>
//                  {ingredients.map(ingredient => (
//                      <li>{ingredient.text}</li>
//                  ))}
//              </ol>
//              <p>{calories}</p>
//              <img className={style.image} src={image} alt="" />
//          </div>
//      );
//  };

//  export default Recipe;