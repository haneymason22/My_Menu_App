import React from "react";
import style from "././recipe.module.css";

const Recipe = ({title,dietLabels,calories,image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h3>{title}</h3>
            <p>{dietLabels}</p>
            <h6>Ingredients: </h6>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {parseInt(calories)} kcal</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;