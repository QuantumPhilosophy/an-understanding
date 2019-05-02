// Importing the React package
import React from 'react'

// Importing and deconstructing the BrowserRouter, Route and Switch functions from the react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Importing the Home Saved and NoMatch pages
import Home from './pages/Home'
import Saved from './pages/Saved'
import NoMatch from './pages/NoMatch'

// Importing the Nav component
import Nav from './components/Nav'

// Declaring the App functional component
// This returns the Router which contains the Nav component along with Routes wrapped in a Switch
// the first two Routes are passing the Home and Saved pages in as props
// The Route with no exact is a catch all page
function App () {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

// Exporting the App component
export default App
