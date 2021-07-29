import React from 'react'
import NavSidebar from './NavSidebar'

export default function Layout({children}) {
  return (
    <>
      <NavSidebar />
      {children}
    </>
  )
}
