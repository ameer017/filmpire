import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'

import store from './app/store'

// theme saved in variable as createTheme({})
const theme = createTheme({})

ReactDOM.createRoot(document.getElementById('root')).render(
  // to use theme imported from mui/material, one have to wrap the BrowserRouter with the ThemeProvider from @mui/material/styles
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </ThemeProvider>,
  </Provider>
)
