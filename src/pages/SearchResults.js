import React from 'react'
import {v4 as uuidv4} from 'uuid'
import './styles/SearchResults.css'
import ListOfCards from '../components/ListOfCards'
import useResults from '../hooks/useResults'


export default function SearchResults({params}) {
  const {keyword, type, keywordType} = params
  const {loading, recipes, setDietParam} = useResults({keyword, type, keywordType})
  
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
    return setDietParam( dietParam )
  }
  
  return (
    <>
    {
    loading 
    ? <i>Cargando...</i> 
    : <div>
      <h1>{decodeURI(keyword)}</h1>
      <ul className="Diet--Options" >
        {
          dietLabels.map((label) => (
            <input key={uuidv4()} onClick={handleClick} type="button" value={label.name} />    
          ))
        }
      </ul>
      <ListOfCards recipes={recipes} />
      </div>
    }    
    </>
  )
}
