import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import Home from './Components/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
