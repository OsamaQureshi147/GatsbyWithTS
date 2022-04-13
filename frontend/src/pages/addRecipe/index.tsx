import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import "./AddRecipePage.css";
import { RouteComponentProps } from "../../Types/RouteComponentProps";
import { ADD_RECIPE } from '../../Queries/gqlMutations';
import { GET_ALL_RECIPIES } from '../../Queries/gqlQueries'
import { Recipe } from "../../Types/Recipe";
// import useCurrentUser from "hooks/useCurrentUser";
// import { ADD_RECIPE, GET_ALL_RECIPES } from "queries";


const AppRecipePage: React.FC<RouteComponentProps> = ({session, username}) => {
  
  const [userName, setUserName] = useState<string | undefined>();

  console.log("Session in add recipe page", username)


  const [recipe, setRecipe] = useState<Recipe>({
    name: "",
    username: userName,
    category: "Breakfast",
    description: "",
    instructions: ""
  });

  const [addRecipe] = useMutation(ADD_RECIPE, {
    update: (cache, { data: { addRecipe } }) => {
      const { getAllRecipes }: any = cache.readQuery({
        query: GET_ALL_RECIPIES,
      });
      cache.writeQuery({
        query: GET_ALL_RECIPIES,
        data: {
          getAllRecipes: [...getAllRecipes, addRecipe],
        },
      });
    },
    onCompleted: () => {
      setRecipe({
        name: "",
        category: "breakfast",
        description: "",
        instructions: "",
        username: ""
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted with data", recipe)
    await addRecipe({
      variables: recipe,
      // refetchQueries: [{ query: GET_ALL_RECIPES }],
    });
  };
  return (
    <>
    <div className="recipe-container">
      <form className="recipe-form" onSubmit={handleSubmit} >
        <h2 id="title">Add Recipe</h2>
        <label className="label">Name*</label>
        <input
          className="input"
          type="text"
          placeholder="Enter Name"
          required
          name="name"
          onChange={handleChange}
        />
        <label className="label">Category*</label>
        <select
          className="input"
          name="category"
          value={recipe.category}
          onChange={handleChange}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
        <label className="label">Description*</label>
        <input
          className="input"
          type="text"
          name="description"
          placeholder="Enter Description"
          onChange={handleChange}
          required
        />
        <label className="label">Instructions*</label>
        <textarea
          className="input"
          rows={5}
          placeholder="Enter Instructions"
          name="instructions"
          onChange={handleChange}
          required
        />

        {/* {error && <label className="error">{error}</label>} */}
        <button className="submit-button">Submit</button>
      </form>
    </div>
    </>
  );
};

export default AppRecipePage;
