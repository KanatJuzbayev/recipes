import { favoriteRecipesSlice } from "../features/favoriteRecipes/favoriteRecipesSlice.js";
import { searchTermSlice } from "../features/searchTerm/searchTermSlice.js";
import { allRecipesSlice } from "../features/allRecipes/allRecipesSlice.js";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipesSlice.reducer,
    searchTerm: searchTermSlice.reducer,
    allRecipes: allRecipesSlice.reducer,
  },
});
