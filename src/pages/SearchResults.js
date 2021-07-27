import React, { useState } from 'react'
import './styles/SearchResults.css'
import ListOfCards from '../components/ListOfCards'
import useResults from '../hooks/useResults'
import {useLocation} from 'wouter'

export default function SearchResults({params}) {
  const {keyword, dietParam} = params
  const {loading, data} = useResults({keyword, dietParam})
  const [path, pushLocation] = useLocation()

  const handleClick = e => {
    e.preventDefault()
    const dietParam = e.target.value
    pushLocation(`/search/${keyword}/${dietParam}`)
    console.log(e.target.value)
  }
  
  console.log(data)
  const dietLabels = [{name: "Balanced"}, {name: "High Fiber"}, {name: "High Protein"}, {name: "Low Carb"}, {name: "Low Fat"}, {name: "Low Sodium"} ]

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
            <input onClick={handleClick} type="button" value={label.name} />    
          ))
        }
      </ul>
      <ListOfCards cards={data} />
      </div>
    }    
    </>
  )
}
