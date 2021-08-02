import React from 'react'
import NavSidebar from './NavSidebar'



export default function Layout(props) {
  
  return (
    <>
      <NavSidebar />
      {props.children}
    </>
  )
}
