import React, { useState } from "react";

function RecipeCreate({createRecipe}) {  
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [rating, setRating] = useState("");
  
  const handleNameChange = (event) => setName(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipe = {
      name: name,
      cuisine: cuisine,
      photo: photo,
      preparation: preparation,
      ingredients: ingredients
    }
    console.log(recipe)
    createRecipe(recipe);
    setName("");
    setPhoto("");
    setCuisine("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" type="text" placeholder="Name" onChange={handleNameChange} value={name} />
            </td>
            <td>
              <input name="cuisine" type="text" placeholder="Cuisine" onChange={handleCuisineChange} value={cuisine} />
            </td>
            <td>
              <input name="photo" type="text" placeholder="Photo" onChange={handlePhotoChange} value={photo} />
            </td>
            <td>
              <textarea name="ingredients" placeholder="Ingredients" onChange={handleIngredientsChange} value={ingredients} />
            </td>
            <td>
              <textarea name="preparation" placeholder="Preparation" onChange={handlePreparationChange} value={preparation} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
