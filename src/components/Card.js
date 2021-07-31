import React from 'react'
import { Link } from 'wouter'
import './styles/Card.css'
import getIdRecipeFromUri from "../utils/getIdRecipeFromUri";
export default function Card(params) {

  const {title, urlImage, source, calories, uri} = params
  
  let idRecipe = getIdRecipeFromUri(uri)

  return (
    <>
      <figure className="Card__Container" >
        
        <img loading="lazy" className="Card__Image" src={urlImage} alt="it-is-a-card" />
        
        <div className="Info" >
          <span className="Info__Kicker">{source}</span>
          <h1 className="Info__Title" >{decodeURI(title)}</h1>
          <span className="Info--Relevant" >{Math.round(calories)} Kcal</span>
          <Link to={`/recipe/${idRecipe}`}>Go</Link>
        </div>

      </figure>
    </>
  )
}
