import React, { useState } from 'react'
import {useLocation} from 'wouter'
import './styles/Home.css'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()

  const handleSubmit = e => {
    e.preventDefault()
    pushLocation(`/search/${keyword}`)
  }
  
  const handleChange = e => {
    setKeyword(e.target.value)
  }
  console.log(keyword)

  return (
    <>
      <header className="Header" >
        <h1 className="Header__Title" >Healthy habits for a better life</h1>
        <p className="Header__Subtitle" >The pocket nutritionist app that will help you reach your health and weight goals</p>
      </header>
      <form onSubmit={handleSubmit} className="Form--Search" >
        <input onChange={handleChange} type="text" placeholder="Search a recipe, an ingredient ..." value={keyword} />
      </form>
    </>
  )
}
