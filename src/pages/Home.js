import React from 'react'
import './styles/Home.css'

export default function Home() {
  return (
    <>
      <header className="Header" >
        <h1 className="Header__Title" >Healthy habits for a better life</h1>
        <p className="Header__Subtitle" >The pocket nutritionist app that will help you reach your health and weight goals</p>
      </header>
      <form className="Form--Search" >
        <input type="text" placeholder="Search a recipe, an ingredient ..." />
      </form>
    </>
  )
}
