import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";

class Saved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2>Saved Recipe</h2>
                <Results recipe={this.state.savedRecipe} />
            </div>
        )
    }
}

export default Saved;