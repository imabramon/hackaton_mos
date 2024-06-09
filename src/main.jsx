import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-chat-elements/dist/main.css'
import { createGlobalStyle } from 'styled-components'

const GlobalCss = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalCss />
  </React.StrictMode>
)
