import React from 'react'
import { Link } from 'wouter'
import './styles/Card.css'
export default function Card({title, url, source, calories, id}) {

  let catchIdFromUrl = id.search("recipe_") + 7;
  let idFormated = id.slice(catchIdFromUrl, id.length);


  return (
    <>
      <figure className="Card__Container" >
        
        <img loading="lazy" className="Card__Image" src={url}/>
        
        <div className="Info" >
          <span className="Info__Kicker">{source}</span>
          <h1 className="Info__Title" >{decodeURI(title)}</h1>
          <span className="Info--Relevant" >{Math.round(calories)} Kcal</span>
          <Link to={`/recipe/${idFormated}`}>Go</Link>
        </div>

      </figure>
    </>
  )
}
