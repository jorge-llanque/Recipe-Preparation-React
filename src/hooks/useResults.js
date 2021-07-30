import { useContext, useEffect, useState } from 'react'
import RecipesContext from '../context/RecipesContext'
import getResults from '../services/getResults'

export default function useResults({keyword, mealType} = {keyword: null, mealType: null}) {
  const [loading, setLoading] = useState(false)
  const [dietParam, setDietParam] = useState(null)
  const {recipes, setRecipes} = useContext(RecipesContext)

  const keywordToUse = keyword
  console.log(keyword, mealType)

  useEffect(() => {
    if(mealType || dietParam) return
    setLoading(true)
    getResults({keyword: keywordToUse})
      .then( recipes => {
        setRecipes(recipes)
        setLoading(false)
      })
  }, [keyword, keywordToUse, setRecipes, dietParam, mealType])

  useEffect(() => {
    if(dietParam == null) return
    getResults({keyword: keywordToUse, dietParam})
      .then( filteredByDiet => {
        setRecipes(filteredByDiet)
      })
  }, [keywordToUse, dietParam, setRecipes])

  useEffect(() => {
    if(mealType == null) return
    getResults({keyword: keywordToUse, mealType})
      .then( filteredByMealType => {
        setRecipes(filteredByMealType)
      })
  }, [keywordToUse, mealType,setRecipes])
  

  return {loading, recipes, setDietParam}
}
