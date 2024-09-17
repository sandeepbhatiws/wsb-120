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
  createRoutesFromElements,
  Routes,
} from "react-router-dom";
import BlogDetails from './Components/BlogDetails.jsx'
import Features from './Components/Features.jsx'
import MarketPlace from './Components/MarketPlace.jsx'
import Company from './Components/company.jsx'
import CommonRoute from './Components/CommonRoute.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//   },
//   {
//     path: "features",
//     element: <Features/>,
//   },
//   {
//     path: "marketplace",
//     element: <MarketPlace/>,
//   },
//   {
//     path: "company",
//     element: <Company/>,
//   },
//   {
//     path: "blog-details/:blog_id/:title",
//     element: <BlogDetails/>,
//   },
//   // {
//   //   path: "blog-details/2",
//   //   element: <BlogDetails/>,
//   // },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="features" element={<Features />}></Route>
      <Route path="marketplace" element={<MarketPlace />}></Route>
      <Route path="company" element={<Company />}></Route>
      <Route path="blog-details/:blog_id/:title" element={<BlogDetails />}></Route>

      <Route path='admin-panel' element={<CommonRoute/>}>
        <Route path='category' element={<Company />}>
          <Route path="add" element={<Company />}></Route>
          <Route path="view" element={<Company />}></Route>
        </Route>
        <Route path='brands'>
          <Route path="add" element={<Company />}></Route>
          <Route path="view" element={<Company />}></Route>
        </Route>
      </Route>
      
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
