import React from 'react'
import Card from './Card'
import {v4 as uuidv4} from 'uuid'

export default function ListOfCards({recipes}) {

  console.log(recipes)
  return (
  <div className="List__Cards" >
    {
      recipes.map( item =>
      <Card 
        key={uuidv4()}
        title= {item.recipe.label}
        urlImage={item.recipe.image}
        uri={item.recipe.uri}
        source={item.recipe.source}
        calories={item.recipe.calories}
        quantityIngredients={item.recipe.ingredientLines}
      />
      )
    }
  </div>
  )
}