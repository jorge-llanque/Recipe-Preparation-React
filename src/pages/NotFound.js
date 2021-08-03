import React from 'react'
import {Link} from 'wouter'
import './styles/NotFound.css'

export default function NotFound() {
  return (
    <div className="NotFound__Container" >
      <span>404</span>
      <span>Ooops!!</span>
      <span>THAT PAGE DOESN'T EXIST OR IS UNAVAILABLE.</span>
      <Link className="NotFound__Button" to="/" >Go Back to Home</Link>
    </div>
  )
}
