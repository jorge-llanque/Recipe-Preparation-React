import { useContext, useEffect, useState } from 'react'
import RecipesContext from '../context/RecipesContext'
import getResults from '../services/getResults'


export default function useResults({keyword, type, keywordType} = {keyword: null, type: null, keywordType: null}) {
  const [loading, setLoading] = useState(false)
  const [dietParam, setDietParam] = useState(null)
  const {recipes, setRecipes} = useContext(RecipesContext)

  const keywordToUse = keyword

  useEffect(() => {
    if(type || dietParam) return
    setLoading(true)
    getResults({keyword: keywordToUse})
      .then( recipes => {
        setRecipes(recipes)
        setLoading(false)
      })
  }, [keyword, keywordToUse, setRecipes, dietParam, type])

  useEffect(() => {
    if(dietParam == null) return
    setLoading(true)
    getResults({keyword: keywordToUse, dietParam})
      .then( filteredByDiet => {
        setRecipes(filteredByDiet)
        setLoading(false)
      })
  }, [keywordToUse, dietParam, setRecipes])

    useEffect(() => {
      if(type == null) return
      setLoading(true)
      getResults({keyword: keywordToUse, type, keywordType})
        .then( filteredByMealType => {
          setRecipes(filteredByMealType)
          setLoading(false)
        })
    }, [keywordToUse, type,setRecipes, keywordType])

  

  return {loading, recipes, setDietParam}
}
