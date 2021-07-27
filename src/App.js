import React from 'react'
import { Route } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/search/:keyword" component={SearchResults} />
    </div>
  );
}

export default App;
