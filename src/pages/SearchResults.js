import React, { useState } from 'react'
import './styles/SearchResults.css'
import ListOfCards from '../components/ListOfCards'
import useResults from '../hooks/useResults'

export default function SearchResults({params}) {
  const {keyword, value} = params
  const {loading, recipes, setDietParam} = useResults({keyword})
  
  const dietLabels = [
    {id: 1, name: "balanced"}, 
    {id: 2, name: "high-fiber"}, 
    {id: 3, name: "high-protein"}, 
    {id: 4, name: "low-carb"}, 
    {id: 5, name: "low-fat"}, 
    {id: 6, name: "low-sodium"} 
  ]
  const handleClick = e => {
    e.preventDefault()
    let dietParam = e.target.value
    console.log(dietParam)
    return setDietParam( dietParam )
  }
  
  return (
    <>
    {
    loading 
    ? <i>Cargando...</i> 
    : <div>
      <h1>{keyword}</h1>
      <ul className="Diet--Options" >
        {
          dietLabels.map((label) => (
            <input key={label.id} onClick={handleClick} type="button" value={label.name} />    
          ))
        }
      </ul>
      <ListOfCards recipes={recipes} />
      </div>
    }    
    </>
  )
}
