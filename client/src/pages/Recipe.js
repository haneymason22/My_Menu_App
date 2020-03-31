import React from "react";
import style from "../recipe.module.css";
import API from "../utils/API";


const Recipe = ({title,calories,image,ingredients}) => {
    return (


        <div className={style.recipe}>
            <h3>{title}</h3>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;