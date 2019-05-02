// Importing the React package
import React from 'react'

// Importing CSS
import './style.css'

// Declaring and Exporting the List functional component
// This returns a List component populated with other components and props
export const List = ({ children }) => (
  <ul className='list-group'>
    {children}
  </ul>
)

// Declaring and Exporting the ListItem functional component
// This returns a ListItem component populated with other components and props
export function ListItem ({ children }) {
  return <li className='list-group-item'>{children}</li>
}
