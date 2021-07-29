import React, { useContext, useEffect, useState } from 'react'
import RecipesContext from '../context/RecipesContext'
import getResults from '../services/getResults'

export default function useResults({keyword} = {keyword: null}) {
  const [loading, setLoading] = useState(false)
  const [dietParam, setDietParam] = useState(null)
  const {recipes, setRecipes} = useContext(RecipesContext)

  const keywordToUse = keyword

  useEffect(() => {    
    setLoading(true)
    getResults({keyword: keywordToUse})
      .then( recipes => {
        setRecipes(recipes)
        setLoading(false)
      })
  }, [keyword, keywordToUse, setRecipes])

  useEffect(() => {
    if(dietParam == null) return
    getResults({keyword: keywordToUse, dietParam})
      .then( filteredByDiet => {
        setRecipes(filteredByDiet)
      })
  }, [keywordToUse, dietParam, setRecipes])
  

  return {loading, recipes, setDietParam}
}
