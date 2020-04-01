import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";


class Recipe extends React.Component {
    state = {
        value: "",
        recipes: []
    };

    componentDidMount() {
        this.searchRecipe();
    }

    makeRecipe = recipeData => {
        return {
            _id: recipeData.id,
            title: recipeData.label,
            diet: recipeData.dietLabels,
            calories: recipeData.calories,
            image: recipeData.image,
            link: recipeData.ingredients
        }
    }

    searchRecipe = query => {
        API.getRecipe(query)
            .then(res => this.setState({ recipes: res.data.items.map(recipeData => this.makeRecipe(recipeData)) }))
            .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchRecipe(this.state.search);
    };

    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    <h2>Results</h2>
                    <Results recipes={this.state.recipes} />
                </div>
            </div>
        )
    }
}

export default Recipe;

// const Recipe = ({title,calories,image,ingredients}) => {
//     return (
//         <div className={style.recipe}>
//             <h3>{title}</h3>
//             <ol>
//                 {ingredients.map(ingredient => (
//                     <li>{ingredient.text}</li>
//                 ))}
//             </ol>
//             <p>{calories}</p>
//             <img className={style.image} src={image} alt="" />
//         </div>
//     );
// };

// export default Recipe;