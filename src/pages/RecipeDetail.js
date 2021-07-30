import React from 'react'
import {v4 as uuidv4} from 'uuid'
import useGlobalRecipes from '../hooks/useGlobalRecipes'

export default function RecipeDetail({params}) {
  console.log(params)
  const recipes = useGlobalRecipes()

  const {recipe} = recipes.find( singleRecipe => {
    let id = singleRecipe.recipe.uri
    let catchIdFromUrl = id.search("recipe_") + 7;
    let idFormated = id.slice(catchIdFromUrl, id.length);
    if (idFormated === params.id){
      return singleRecipe
    }else {
      return null
    }
  })

  return (
    <>
     <h1>Recipe Detail</h1>
     <h2>{recipe.label}</h2>
     <img src={recipe.image} alt="alt" />

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
