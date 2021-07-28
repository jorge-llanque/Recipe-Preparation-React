import React from 'react'
import {useLocation} from 'wouter'


export default function DiteCategory({keyword}) {
  const [path, pushLocation] = useLocation()

  const handleClick = e => {
    e.preventDefault()
    const dietParam = e.target.value
    pushLocation(`/search/${keyword}/${dietParam}`)
    console.log(e.target.value)
  }
  const dietLabels = [
    {name: "Balanced"}, 
    {name: "High Fiber"}, 
    {name: "High Protein"}, 
    {name: "Low Carb"}, 
    {name: "Low Fat"}, 
    {name: "Low Sodium"} 
  ]

  return (
    <>
      <ul className="Diet--Options" >
        {
          dietLabels.map((label) => (
            <input onClick={handleClick} type="button" value={label.name} />    
          ))
        }
      </ul>
    </>
  )
}
