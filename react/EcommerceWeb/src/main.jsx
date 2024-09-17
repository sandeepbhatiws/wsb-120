import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './HomeComponent.jsx'
import '../src/assets/css/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <HomeComponent/>
  </StrictMode>,
)
