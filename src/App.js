import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';
import SearchPage from './components/SearchPage/SearchPage.js';
import Header from './components/Common/Header.js';

function App() {
  return (
    <div className=".App">
      <Router>
        <Header />
        <Switch>
          <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
          />
          <Route
              path="/search"
              exact
              render={(routerProps) => <SearchPage {...routerProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
