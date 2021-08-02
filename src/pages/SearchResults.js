import React from 'react'
import {v4 as uuidv4} from 'uuid'
import './styles/SearchResults.css'
import ListOfCards from '../components/ListOfCards'
import useResults from '../hooks/useResults'
import Skeleton from 'react-loading-skeleton'



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
    ? <div className="SearchResults__Container" >
      <h1><Skeleton width={150} /></h1>
      <ul className="Diet__Options" >
          {
            dietLabels.map((label) => (
              <Skeleton key={uuidv4()} height={40} width={90} value={label.name} className="Diet__Options-Item" />
            ))
          }
      </ul>
      <div className="List__Cards" >
            {[1,2,3].map(()=>(
              <figure key={uuidv4()} className="Card__Container" >
                <div className="Card__Image-Polaroid" >
                  <Skeleton width={400} height={300} className="Card__Image"/>
                </div>
                <div className="Info" >
                  <Skeleton width={200} className="Info__Kicker"/>
                  <div>
                      <h1 className="Info__Title" ><Skeleton width={100} height={20}/></h1>
                  </div>
                  <div className="Info__Relevant">
                    <span><Skeleton width={100}/></span>
                    <span><Skeleton width={100}/></span>
                  </div>
                </div>
              </figure>
            ))
            }
      </div>

    </div>
    : <div className="SearchResults__Container" >
        <h1>{decodeURI(keyword)}</h1>
        <ul className="Diet__Options" >
          {
            dietLabels.map((label) => (
              <input key={uuidv4()} onClick={handleClick} type="button" value={label.name} className="Diet__Options-Item" />
            ))
          }
        </ul>
        <ListOfCards recipes={recipes} />
      </div>
    }    
    </>
  )
}
