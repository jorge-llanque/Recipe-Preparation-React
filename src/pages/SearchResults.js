import React from 'react'
import './styles/SearchResults.css'
import ListOfCards from '../components/ListOfCards'
import useResults from '../hooks/useResults'

export default function SearchResults({params}) {
  const {keyword} = params
  const {loading, data} = useResults({keyword})
  console.log(data)
  return (
    <>
    {
    loading ? <i>Cargando...</i> : <ListOfCards cards={data} />
    }    
    </>
  )
}
