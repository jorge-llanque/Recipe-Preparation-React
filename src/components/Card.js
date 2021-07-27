import React from 'react'
import './styles/Card.css'
export default function Card({key, title, url, id}) {
  return (
    <>
      <figure className="Card__Container" >
        
        <img className="Card__Image" src={url}/>
        
        <div className="Info" >
          <span className="Info__Kicker">Smoothie</span>
          <h1 className="Info__Title" >{title}</h1>
          <span className="Info--Relevant" > 340 Kcal</span>
        </div>

      </figure>
    </>
  )
}
