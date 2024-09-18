import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Wishlist from './Componet/Page/Wishlist.jsx'
import Context from './Componet/Context/Context.jsx'
import 'react-toastify/dist/ReactToastify.css';


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/wishlist",
    element:<Wishlist/>,
  },
  

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  
  </StrictMode>,
)
