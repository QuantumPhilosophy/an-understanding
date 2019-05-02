// Importing the React package
import React from 'react'

// Importing CSS
import './style.css'

// Declaring the Jumbotron functional component
// This returns a Jumbotron component populated with other components and props
function Jumbotron ({ children }) {
  return <div className='jumbotron mt-4'>{children}</div>
}

// Exporting the Jumbotron component
export default Jumbotron
