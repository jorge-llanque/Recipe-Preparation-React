import React, { useState } from 'react'

const Context = React.Context({});

export function RecipesContextProvider({children}) {
  const [recipe, setRecipe] = useState([])

  return (
    <Context.Provider value={{recipe, setRecipe}} >
      {children}
    </Context.Provider>
  )
}

export default Context