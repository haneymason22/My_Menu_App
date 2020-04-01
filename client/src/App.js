import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import Login from "./pages/Login";
import Recipe from "./pages/Recipe";
import Saved from "./pages/Saved";

import "./App.css";

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Wrapper>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/recipe" component={Recipe} />
            <Route exact path="/saved" component={Saved} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;


// import { BrowserRouter as Router, Route } from "react-router-dom";

// import React, { useEffect, useState } from "react";
// import Recipe from "./pages/Recipe";
// import Login from "./pages/Login";
// import Saved from "./pages/Saved";

// import Nav from "./components/Nav";
// import Wrapper from "./components/Wrapper";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import "./App.css";

// const App = () => {
//   const APP_ID = "76ee5205";
//   const APP_KEY = "52a0fcb8039096d6fc09d45afd8c1119";

//   const [recipes, setRecipes] = useState([]);
//   const [search, setSearch] = useState("");
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     getRecipes();
//   }, [query]);

//   const getRecipes = async () => {
//     const response = await fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
//     );
//     const data = await response.json();
//     setRecipes(data.hits);
//     console.log(data.hits);
//   };

//   const updateSearch = e => {
//     setSearch(e.target.value);
//   };

//   const getSearch = e => {
//     e.preventDefault();
//     setQuery(search);
//     setSearch("");
//   };

//   return (

    

//     <div className="App">
//       <Router>
//         <Nav/>
//         <Header/>
//         <Wrapper>
//           <Route exact path="/" component={Login}/>
//           <Route exact path="/login" component={Login}/>
//           <Route exact path="/recipe" component={Recipe}/>
//           <Route exact path="/saved" components={Saved}/>
//         </Wrapper>
//       </Router>

      

//       <form onSubmit={getSearch} className="search-form">
//         <input className="search-bar" type="text" value={search} onChange={updateSearch} />
//         <button className="search-button" type="submit">
//           Search
//         </button>
//       </form>
//       <div className ="recipes">
//       {recipes.map(recipe => (
//         <Recipe
//           key={recipe.recipe.label}
//           title={recipe.recipe.label}
//           dietLabels={recipe.recipe.dietLabels}
//           calories={recipe.recipe.calories}
//           image={recipe.recipe.image}
//           ingredients={recipe.recipe.ingredients}
//         />
//       ))}
//       <Footer/>
//       </div>
//     </div>
//   );
// };

// export default App;
