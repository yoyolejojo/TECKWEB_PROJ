import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainHeader from './header/MainHeader.jsx'
import MainMessage from './forum/MainMessage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <MainHeader />
    <MainMessage />

  </React.StrictMode>,
)
