import React from 'react'
import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import SearchResults from './pages/SearchResults'
import OptionsAndCategories from './pages/OptionsAndCategories'
import './App.css'
import {RecipesContextProvider} from './context/RecipesContext'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'


function App() {
  return (
    <div className="App">
      <RecipesContextProvider>
        <Layout>  
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/search/:keyword/:type?/:keywordType?" component={SearchResults} />
            <Route path="/recipe/:id" component={RecipeDetail} />
            <Route path="/meal-type/:mealType" component={OptionsAndCategories}/>
            <Route path="/dish-type/:dishType" component={OptionsAndCategories}/>
            <Route path="/healthy-meals/:healthyType" component={OptionsAndCategories}/>
            <Route path="/:rest*" component={NotFound}/>
          </Switch>
        </Layout>
      </RecipesContextProvider>
    </div>
  );
}

export default App;
