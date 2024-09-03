import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css';
import './assets/css/responsive.css';
import Home from './Components/Home';
import Header from './Components/Common/Header';
import Footer from './Components/Common/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <Footer></Footer>
  </StrictMode>,
)
