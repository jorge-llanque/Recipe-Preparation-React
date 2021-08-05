import React from 'react'
import {v4 as uuidv4} from 'uuid'
import useGlobalRecipes from '../hooks/useGlobalRecipes'
import getIdRecipeFromUri from '../utils/getIdRecipeFromUri'
import './styles/RecipeDetail.css'
import useResults from "../hooks/useResults";
import { BiCheck } from 'react-icons/bi';


export default function RecipeDetail({params}) {

  const recipes = useGlobalRecipes()
    
    if(!recipes.length) return (<h1>There is not that Information</h1>)

    const {recipe} = recipes.find( singleRecipe => {
      let idSingleRecipe = getIdRecipeFromUri(singleRecipe.recipe.uri)
      if(idSingleRecipe === params.id) return singleRecipe
    })
  


  return (
    <>
     <div className="Detail__Container">
        <div className="Detail__Image-Polaroid" >
          <img src={recipe.image} alt="this-is-a-detail" />
        </div>
        <div className="Info-Detail" >
          <span className="Info__Kicker-Detail">{recipe.source} Recommend</span>
          <div className="Info-Description" >
              <h1 className="Info__Title-Detail" >{recipe.label}</h1>
              <div className="Info__Relevant-Detail">
                <div className="Info__Relevant-Box" >
                  <span>CALORIES</span>
                  <div>
                    <strong>{Math.round(recipe.calories)}</strong>
                    <span> Kcal</span>
                  </div>
                </div>
                <div className="Info__Relevant-Box" >
                  <span>CARB</span>
                  <div>
                    <strong>{Math.round(recipe.totalNutrients.CHOCDF.quantity)}</strong>
                    <span> g</span>
                  </div>
                </div>
                <div className="Info__Relevant-Box" >
                  <span>FAT</span>
                  <div>
                  <strong>{Math.round(recipe.totalNutrients.FAT.quantity)}</strong>
                  <span> g</span>
                  </div>
                </div>
                <div className="Info__Relevant-Box" >
                  <span>PROTS</span>
                  <div>
                    <strong>{Math.round(recipe.totalNutrients.PROCNT.quantity)}</strong>
                    <span> g</span>
                  </div>
                </div>
              </div>
              <div className="Info__IngredientsList">
                <h3>Ingredients :</h3>
                <ul>
                  {
                  recipe.ingredientLines.map( ingredient => 
                    <div className="Ingredient__Item" >
                      <BiCheck className="Ingredient__Item-Icon"/>
                      <li key={uuidv4()} >{ingredient}</li>
                    </div>
                  )
                  }
                </ul>
              </div>
          </div>
        </div>
     </div>
    </>
  )
}
