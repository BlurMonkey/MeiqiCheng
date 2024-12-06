import { StrictMode } from 'react'
// Import React's StrictMode to help identify potential problems in the application
import { createRoot } from 'react-dom/client'
// Import createRoot from React 18 to create the root rendering
import App from './App.jsx'
// Import the main application component
import './index.css'
// Import global styles
import { BrowserRouter } from 'react-router-dom'
// Import BrowserRouter to enable routing
import './App.css';
// Import styles specific to the App component

import { store } from './app/store.jsx';
// Import the Redux Store
import { Provider } from 'react-redux';
// Import Provider from react-redux to provide the Redux Store to the entire application

// Create the root node and render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

