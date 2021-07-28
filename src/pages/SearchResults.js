import React, { useState } from 'react'
import './styles/SearchResults.css'
import ListOfCards from '../components/ListOfCards'
import useResults from '../hooks/useResults'

import DietCategory from '../components/DietCategory'

export default function SearchResults({params}) {
  const {keyword, dietParam} = params
  const {loading, data} = useResults({keyword, dietParam})
  
  
  console.log(data)
  

  return (
    <>
    {
    loading 
    ? <i>Cargando...</i> 
    : <div>
      <h1>{keyword}</h1>
      <DietCategory keyword={keyword} />
      <ListOfCards cards={data} />
      </div>
    }    
    </>
  )
}
