// Importing the React package
import React from 'react'

// Declaring the Footer functional component
// This returns a Footer component populated with other components and props
function Footer () {
  return (
    <footer>
      <hr />
      <p className='pull-right'>
        <i className='fab fa-github' /> Proudly built using React.js
      </p>
    </footer>
  )
}

// Exporting the Footer component
export default Footer
