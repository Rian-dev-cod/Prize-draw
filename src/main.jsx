import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import './styles/global.css'
import './styles/header.css'
import './styles/formulario.css'
import './styles/lista.css'
import './styles/modal.css'
import './styles/responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)