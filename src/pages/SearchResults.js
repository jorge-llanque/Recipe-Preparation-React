import React from 'react'
import './styles/SearchResults.css'
import ListOfCards from '../components/ListOfCards'
import useResults from '../hooks/useResults'

export default function SearchResults({params}) {
  const {keyword} = params
  const {loading, data} = useResults({keyword})
  console.log(data)
  return (
    <>
    {
    loading 
    ? <i>Cargando...</i> 
    : <div>
      <h1>{keyword}</h1>
      <ul className="Diet--Options" >
        <li>Balanced</li>
        <li>High Fiber</li>
        <li>High Protein</li>
        <li>Low Carb</li>
        <li>Low Fat</li>
        <li>Low Sodium</li>
        
      </ul>
      <ListOfCards cards={data} />
      </div>
    }    
    </>
  )
}
