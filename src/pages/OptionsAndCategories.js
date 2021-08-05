import React from 'react'
import SuggestionsList from '../components/SuggestionsList'


export default function OptionsAndCategories({params}) {  

  const getCategory = (obj) => {
    return {
      type:  Object.keys(obj).toString(),
      keywordType: Object.values(obj).toString()
    }
  }
  
  let category = getCategory(params)
  
  return (
    <div>
      <SuggestionsList category={category} />
    </div>
  )
}
