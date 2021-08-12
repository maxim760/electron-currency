import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { CurrencyProvider } from './context/CurrencyContext'

ReactDOM.render(
  <React.StrictMode>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
