import allRecipesData from "../../data.js";
import { selectSearchTerm } from "../searchTerm/searchTermSlice.js";
import { createSlice } from "@reduxjs/toolkit";

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: [],
  reducers: {
    loadData: (state, action) => {
      return allRecipesData;
    },
    removeRecipeFromAll: (state, action) => {
      return state.filter((recipe) => recipe.id !== action.payload.id);
    },
    addRecipeToAll: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const selectAllRecipes = (state) => state.allRecipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const {
  loadData,
  removeRecipeFromAll,
  addRecipeToAll,
} = allRecipesSlice.actions;
