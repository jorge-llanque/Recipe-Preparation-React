import { useContext } from "react";
import RecipesContext from '../context/RecipesContext'

export default function useGlobalRecipes() {
  return useContext(RecipesContext).recipes
}