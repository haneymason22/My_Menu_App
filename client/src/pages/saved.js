import React, { Component } from "react";
import API from "../utils/API";
// import Results from "../components/Results";

class saved extends Component {
    state = {
        savedRecipes: [],
    }

    componentDidMount() {
        API.savedRecipes()
            .then(savedRecipes => this.setState({ savedRecipes: savedRecipes }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2>Saved Recipes:</h2>
                {/* <Results recipe={this.state.savedRecipes} /> */}
            </div>
        )
    }
}

export default saved;