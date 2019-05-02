// Importing the React package
import React from 'react'

// Declaring the Card functional component
// This returns a Card component populated with other components and props
function Card ({ icon, title, children }) {
  return (
    <div className='card mt-4'>
      <div className='card-header'>
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden='true' /> {title}
          </strong>
        </h3>
      </div>
      <div className='card-body'>{children}</div>
    </div>
  )
}

// Exporting the Card component
export default Card
