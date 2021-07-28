import React, { useState } from 'react'
import './styles/SearchResults.css'
import ListOfCards from '../components/ListOfCards'
import useResults from '../hooks/useResults'

import DietCategory from '../components/DietCategory'

export default function SearchResults({params}) {
  const {keyword, dietParam} = params
  const {loading, recipes} = useResults({keyword, dietParam})
  
  
  console.log(recipes)
  

  return (
    <>
    {
    loading 
    ? <i>Cargando...</i> 
    : <div>
      <h1>{keyword}</h1>
      <DietCategory keyword={keyword} />
      <ListOfCards recipes={recipes} />
      </div>
    }    
    </>
  )
}
