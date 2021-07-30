import React from 'react'
import {useLocation} from 'wouter'
import { v4 as uuidv4 } from 'uuid';
import suggestionsList from '../utils/suggestionsList'

export default function ListBreakfastMealType({mealType}) {
const [path, pushLocation] = useLocation()


  const { titleList } = suggestionsList.find( item => item.mealType == mealType)

  const handleOnClick = (e) => {
    const keyword = e.target.value
    pushLocation(`/search/${keyword}/${mealType}`)
  }

  return (
    <>
     <section className="SuggestionList" >
       <h2>Suggestions</h2>
        <ul>
        {
          titleList.map( item =>(
            <input key={uuidv4()} type="button" onClick={handleOnClick} value={item.name} />
          ))
        }
       </ul>
      </section> 
    </>
  )
}
