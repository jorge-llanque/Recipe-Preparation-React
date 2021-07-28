import React from 'react'
import { Route } from 'wouter'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import SearchResults from './pages/SearchResults'
import './App.css';
import {RecipesContextProvider} from './context/RecipesContext'


function App() {
  return (
    <div className="App">
      <RecipesContextProvider>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword/:dietParam?" component={SearchResults} />
        <Route path="/recipe/:id" component={RecipeDetail} />
      </RecipesContextProvider>
    </div>
  );
}

export default App;
