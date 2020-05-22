import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreatePart from './pages/CreatePart';
import Home from './pages/Home';
import Header from './components/Header';
import "./styles/index.scss";
import { createStore } from 'lib/StateManager';
import initialState from './initialStoreState/initialState';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={CreatePart} />
        </div>
      </div>
    </Router>
  );
}
const StoreApp = createStore(App, initialState);

export default StoreApp;
