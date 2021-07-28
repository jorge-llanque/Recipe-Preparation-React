import React, { useContext, useEffect, useState } from 'react'
import RecipesContext from '../context/RecipesContext'
import getResults from '../services/getResults'

export default function useResults({keyword, dietParam} = {keyword: null}) {
  const [loading, setLoading] = useState(false)
  const {recipes, setRecipes} = useContext(RecipesContext)

  useEffect(() => {    
    setLoading(true)
    const keywordToUse = keyword
    getResults({keyword: keywordToUse, dietParam})
      .then( recipes => {
        setRecipes(recipes)
        setLoading(false)
      })
  }, [keyword, setRecipes])
  
  return {loading, recipes}
}
