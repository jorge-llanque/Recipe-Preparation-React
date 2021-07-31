import React from 'react'
import {useLocation} from 'wouter'
import { v4 as uuidv4 } from 'uuid';
import suggestionsList from '../utils/suggestionsList'


export default function SuggestionsList({category}) {
const [path, pushLocation] = useLocation()

  const {type, keywordType} = category

  let element
  suggestionsList.forEach( item => {
     if(item.type == type){
        item.content.forEach( elem => {
          if(elem.keyword == keywordType){
            element = elem
          }
        })
     }
    })

  const handleOnClick = (e) => {
    const keyword = e.target.value
    pushLocation(`/search/${keyword}/${type}/${keywordType}`)
  }

  return (
    <>
     <section className="SuggestionList" >
       <h2>Suggestions</h2>
        <ul>
        {
          element.titleList.map( item =>(
            <input 
              key={uuidv4()} 
              type="button" 
              onClick={handleOnClick} 
              value={item.name} 
            />
          ))
        }
       </ul>
      </section> 
    </>
  )
}
