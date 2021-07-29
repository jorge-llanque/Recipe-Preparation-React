import React from 'react'
import { Route } from 'wouter'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import SearchResults from './pages/SearchResults'
import BreakfastMealType from './pages/BreakfastMealType'
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
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/recipe/:id" component={RecipeDetail} />
          <Route path="/meal-type/breakfast" component={BreakfastMealType}/>
          <Route path="/meal-type/dinner" component={DinnerMealType}/>
          <Route path="/meal-type/lunch" component={LunchMealType}/>
          <Route path="/meal-type/snack" component={SnackMealType}/>
          <Route path="/meal-type/teatime" component={TeatimeMealType}/>




        </Layout>
      </RecipesContextProvider>
    </div>
  );
}

export default App;
