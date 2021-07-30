import React from 'react'
import { Route } from 'wouter'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import SearchResults from './pages/SearchResults'
import OptionsMealType from './pages/OptionsMealType'
import DinnerMealType from './pages/DinnerMealType'
import LunchMealType from './pages/LunchMealType'
import SnackMealType from './pages/SnackMealType'
import TeatimeMealType from './pages/TeatimeMealType'
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
          <Route path="/meal-type/:mealType" component={OptionsMealType}/>




        </Layout>
      </RecipesContextProvider>
    </div>
  );
}

export default App;
