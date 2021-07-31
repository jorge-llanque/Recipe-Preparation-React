import React from 'react'
import {v4 as uuidv4} from 'uuid'
import useGlobalRecipes from '../hooks/useGlobalRecipes'
import getIdRecipeFromUri from '../utils/getIdRecipeFromUri'

export default function RecipeDetail({params}) {
  const recipes = useGlobalRecipes()

  const {recipe} = recipes.find( singleRecipe => {
    let idSingleRecipe = getIdRecipeFromUri(singleRecipe.recipe.uri)
    if(idSingleRecipe === params.id) return singleRecipe
  })

  return (
    <>
     <h1>Recipe Detail</h1>
     <h2>{recipe.label}</h2>
     <img src={recipe.image} alt="this-is-a-detail" />
      <ul>
        {
          recipe.ingredientLines.map( ingredient => 
          <li key={uuidv4()} >{ingredient}</li>
          )
          }
      </ul>
    </>
  )
}
