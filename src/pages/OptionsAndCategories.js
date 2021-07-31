import React from 'react'
import SuggestionsList from '../components/SuggestionsList'


export default function OptionsAndCategories({params}) {
  
  console.log(params)
  const {mealType, dishType} = params

  let category
  if(mealType) {
    category = {type:"mealType", keyword: mealType }
  }else if(dishType){
    category = {type:"dishType", keyword: dishType}
  }
  
  return (
    <div>
      MealType
      <SuggestionsList category={category} />
    </div>
  )
}
