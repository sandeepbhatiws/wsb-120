import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import BlogDetails from './Components/BlogDetails.jsx'
import Features from './Components/Features.jsx'
import MarketPlace from './Components/MarketPlace.jsx'
import Company from './Components/company.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "features",
    element: <Features/>,
  },
  {
    path: "marketplace",
    element: <MarketPlace/>,
  },
  {
    path: "company",
    element: <Company/>,
  },
  {
    path: "blog-details/:blog_id/:title",
    element: <BlogDetails/>,
  },
  // {
  //   path: "blog-details/2",
  //   element: <BlogDetails/>,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
