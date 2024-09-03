import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import ShowHide from './ShowHide.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home/> */}
    <ShowHide/>
  </StrictMode>,
)
