import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import MenuBar from './Components/MenuBar/MenuBar';
import { createContext, useState } from 'react';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Destination from './Components/Destination/Destination';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SearchLocation from './Components/SearchLocation/SearchLocation';

export const userContext = createContext();
function App() {
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  });

  return (
    <userContext.Provider value={[user, setUser]}>
      <div className="container">

        <Router>
          <MenuBar />
          <Switch>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/destination">
              <Destination />
            </PrivateRoute>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <PrivateRoute path="/vehicle/:name">
              <SearchLocation />
            </PrivateRoute>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="*">
              <h1 className="text-center">Error-404 :(</h1>
            </Route>

          </Switch>
          <footer className="text-center p-3 text-light bg-secondary">&copy;2021 Riding Lover || All Rights Reserved</footer>
        </Router>

      </div>
    </userContext.Provider>
  );
}

export default App;
