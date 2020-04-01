import React from "react";
import "./style.css";

const Recipe = ({title, dietLabels, calories,image,ingredients, link}) => {
    return (
       <div className= "recipe">
           <h3>{title}</h3>
           <p>Diet Type: {dietLabels}</p>
           <p>Ingredients:</p>
           <ol>
               {ingredients.map(ingredient => (
                   
                   <li>{ingredient.text}</li>
               ))}
           </ol>
           <p>Calories: {parseInt(calories)}</p>
           <img className= "image" src={image} alt="" />
           <div>
           <a href={link} className="btn badge-pill btn-outline-dark mt-3" target="_blank" >View</a>
            <button className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                   Save
                </button>
           </div>
       </div>
   );
};

export default Recipe;