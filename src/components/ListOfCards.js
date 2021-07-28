import React from 'react'
import Card from './Card'

export default function ListOfCards({recipes}) {

  return (
  <div className="List__Cards" >
    {
      recipes.map( item =>
      <Card 
        key={item.recipe.uri}
        title= {item.recipe.label}
        url={item.recipe.image}
        id={item.recipe.uri}
        source={item.recipe.source}
        calories={item.recipe.calories}
      />
      )
    }
  </div>
  )
}
