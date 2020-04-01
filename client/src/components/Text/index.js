import React from "react";
import "./style.css";

const Recipe = ({title,calories,image,ingredients,}) => {
    return (
       <div className= "recipe">
           <h3>{title}</h3>
           <p>Ingredients</p>
           <ol>
               {ingredients.map(ingredient => (
                   
                   <li>{ingredient.text}</li>
               ))}
           </ol>
           <p>Calories: {calories}</p>
           <img className= "image" src={image} alt="" />
           <div>
            <button className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                   Save
                </button>
           </div>
       </div>
   );
};

export default Recipe;