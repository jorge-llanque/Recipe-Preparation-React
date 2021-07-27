import React from 'react'
import './styles/Card.css'
export default function Card({title, url, source, calories}) {
  return (
    <>
      <figure className="Card__Container" >
        
        <img className="Card__Image" src={url}/>
        
        <div className="Info" >
          <span className="Info__Kicker">{source}</span>
          <h1 className="Info__Title" >{title}</h1>
          <span className="Info--Relevant" >{Math.round(calories)} Kcal</span>
        </div>

      </figure>
    </>
  )
}
