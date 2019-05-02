// These imports set up React and ReactDOM packages
import React from 'react'
import ReactDOM from 'react-dom'

// Importing the App component
import App from './App'

// Importing the registerServiceWorker
import registerServiceWorker from './registerServiceWorker'

// Using ReactDOM.render to render the App component to the root id on the index.html in the public directory
ReactDOM.render(<App />, document.getElementById('root'))

// Registering the Service Worker
registerServiceWorker()
