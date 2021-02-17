import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';
import SearchPage from './components/SearchPage/SearchPage.js';
import Header from './components/Common/Header.js';
import APISearchPage from './components/SearchPage/APISearchPage.js';

function App() {
  return (
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
          <Route 
              path="/api-search"
              exact
              render={(routerProps) => <APISearchPage {...routerProps} />}
          />
        </Switch>
      </Router>
  );
}

export default App;
