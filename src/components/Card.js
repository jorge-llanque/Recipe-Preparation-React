import React from 'react'
import { Link } from 'wouter'
import './styles/Card.css'
import getIdRecipeFromUri from "../utils/getIdRecipeFromUri";
import Skeleton from 'react-loading-skeleton'


export default function Card(params) {

  const {title, urlImage, source, calories, uri, quantityIngredients} = params
  
  let idRecipe = getIdRecipeFromUri(uri)
  let quantityIng = quantityIngredients.length
  return (
    <>
      <figure className="Card__Container" >
        <div className="Card__Image-Polaroid" >
          {!urlImage 
              ? <Skeleton className="Card__Image"/> 
              : <img className="Card__Image" src={urlImage} alt="it-is-a-card" />
          }
          
        </div>
        <div className="Info" >
          <span className="Info__Kicker">{source} Recommend</span>
          <Link to={`/recipe/${idRecipe}`}>
              <h1 className="Info__Title" >{decodeURI(title)}</h1>
          </Link>
          <div className="Info__Relevant">
            <span>{Math.round(calories)} Kcal</span>
            <span>{quantityIng} Ingredients</span>
          </div>
        </div>

      </figure>
    </>
  )
}
