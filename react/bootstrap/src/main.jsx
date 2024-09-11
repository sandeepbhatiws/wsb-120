import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import reactLogo from './assets/react.svg'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Components/Common/Header.jsx';
import ProductListing from './Components/Product/ProductListing.jsx';
import Footer from './Components/Common/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <ProductListing/>
    <Footer/>
  </StrictMode>,
)
