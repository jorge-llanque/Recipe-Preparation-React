import React from 'react'
import { Route } from 'wouter'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import SearchResults from './pages/SearchResults'
import OptionsAndCategories from './pages/OptionsAndCategories'
import './App.css';
import {RecipesContextProvider} from './context/RecipesContext'
import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <RecipesContextProvider>
        <Layout>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword/:mealType?" component={SearchResults} />
          <Route path="/recipe/:id" component={RecipeDetail} />
          <Route path="/meal-type/:mealType" component={OptionsAndCategories}/>
          <Route path="/dish-type/:dishType" component={OptionsAndCategories}/>
        </Layout>
      </RecipesContextProvider>
    </div>
  );
}

export default App;
