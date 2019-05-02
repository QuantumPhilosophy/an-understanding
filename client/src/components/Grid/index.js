// Importing the React package
import React from 'react'

// Declaring and Exporting the Container functional component
// This returns a Container component populated with other components and props
export function Container ({ fluid, children }) {
  return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>
}

// Declaring and Exporting the Row functional component
// This returns a Row component populated with other components and props
export function Row ({ fluid, children }) {
  return <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>
}

// Declaring and Exporting the Col functional component
// This returns a Col component populated with other components and props
export function Col ({ size, children }) {
  return (
    <div
      className={size
        .split(' ')
        .map(size => 'col-' + size)
        .join(' ')}
    >
      {children}
    </div>
  )
}
