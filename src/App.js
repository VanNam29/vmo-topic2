import React  from 'react';
import Calculator from './features/calculator/Calculator';
import Quote from './features/quote/Quote';
import Todo from './features/todo/Todo';
import Count from './features/count/Count';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

// const Count = React.lazy(() => import('./features/count/Count'));

function App() {
  return (
      <Router>
        <div className="w-full">

          <Header />

          <Switch>
            <Route path="/count">
              <Count />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/quote">
              <Quote />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
