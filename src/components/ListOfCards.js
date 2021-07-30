import React from 'react'
import Card from './Card'
import {v4 as uuidv4} from 'uuid'

export default function ListOfCards({recipes}) {

  return (
  <div className="List__Cards" >
    {
      recipes.map( item =>
      <Card 
        key={uuidv4()}
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
