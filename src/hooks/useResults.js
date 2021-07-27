import React, { useEffect, useState } from 'react'
import getResults from '../services/getResults'

export default function useResults({keyword, dietParam} = {keyword: null}) {
  
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    const keywordToUse = keyword
    console.log(keywordToUse, dietParam);
    getResults({keyword: keywordToUse, dietParam})
      .then( data => {
        setData(data)
        setLoading(false)
      })
  }, [keyword])
  
  return {loading, data}
}
