// import {Route, BrowserRouter as Router} from "react-router-dom";

import React, { useEffect, useState } from "react";
import Recipe from "./pages/Recipe";
import Login from "./pages/Login";
import Saved from "./pages/Saved";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/index"

// import style from "../app.module.css";
import "././App.js";
import {BrowserRouter as Route } from "react-router-dom"


const App = () => {
  const APP_ID = "76ee5205";
  const APP_KEY = "52a0fcb8039096d6fc09d45afd8c1119";
  // const APP_ID = "";
  // const APP_KEY = "";

  // "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (



    <div className="App">

<Nav/>
  <Header/>
  <Wrapper>
<Route exact path="/" components={Login}/>
<Route exact path="/login" components={Login}/>
<Route exact path="/recipe" components={Recipe}/>
<Route exact path="/saved" components={Saved}/>
</Wrapper>



      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className ="recipes">
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
       
      ))} 
      
      <Footer/>
      </div>
    </div>
  );
};

export default App;
