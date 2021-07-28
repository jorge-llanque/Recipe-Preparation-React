import React from 'react'
import useGlobalRecipes from '../hooks/useGlobalRecipes'

export default function RecipeDetail({params}) {
  const recipes = useGlobalRecipes()

  const {recipe} = recipes.find(singleRecipe => {
    let id = singleRecipe.recipe.uri
    let catchIdFromUrl = id.search("recipe_") + 7;
    let idFormated = id.slice(catchIdFromUrl, id.length);
    if (idFormated === params.id){
      return singleRecipe
    }
  })

  return (
    <>
     <h1>Recipe Detail</h1>
     <h2>{recipe.label}</h2>
     <img src={recipe.image} />

      <ul>

        {
          recipe.ingredientLines.map( ingredient => 
          <li>{ingredient}</li>
          )
          }
      </ul>
    </>
  )
}
