import React, { useState } from 'react'

const Context = React.createContext({});

export function RecipesContextProvider({children}) {
  const [recipes, setRecipes] = useState([])

  return (
    <Context.Provider value={{recipes, setRecipes}} >
      {children}
    </Context.Provider>
  )
}

export default Context