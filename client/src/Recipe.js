import React from "react";
import style from "././recipe.module.css";

const Recipe = ({title,calories,image}) => {
    return (
        <div className={style.recipe}>
            <h3>{title}</h3>
            <p>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;