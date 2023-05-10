import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
// import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import ToggleColorModeProvider from './utilities/ToggleColorMode'
import store from './app/store'

// theme saved in variable as createTheme({})

ReactDOM.createRoot(document.getElementById('root')).render(
  // to use theme imported from mui/material, one have to wrap the BrowserRouter with the ThemeProvider from @mui/material/styles
  <Provider store={store}>
    <ToggleColorModeProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ToggleColorModeProvider>,
  </Provider>
)
