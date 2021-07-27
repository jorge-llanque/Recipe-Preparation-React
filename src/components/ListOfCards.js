import React from 'react'
import Card from './Card'

export default function ListOfCards({cards}) {

  return (
  <div className="List__Cards" >
    {
      cards.map( item =>
      <Card 
        key={item.recipe.uri}
        title= {item.recipe.label}
        url={item.recipe.image}
        id={item.recipe.uri}
      />
      )
    }
  </div>
  )
}
