import React from 'react'
import ListBreakfastMealType from '../components/ListBreakfastMealType'


export default function OptionsMealType({params}) {
  console.log(params)
  const {mealType} = params
  
  return (
    <div>
      MealType
      <ListBreakfastMealType mealType={mealType} />
    </div>
  )
}
