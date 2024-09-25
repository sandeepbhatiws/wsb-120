import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import RootLevel from './Components/RootLevel.jsx';
import AddQuiz from './Components/AddQuiz.jsx';
import ViewQuiz from './Components/ViewQuiz.jsx';
import PlayQuiz from './Components/PlayQuiz.jsx';
import LoginRegister from './Components/LoginRegister.jsx';
import Context from './Components/Context/Context.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLevel />}>
      <Route path='/' element={<PlayQuiz/>}></Route>
      <Route path='add-quiz' element={<AddQuiz/>}></Route>
      <Route path='view-quiz' element={<ViewQuiz/>}></Route>
      <Route path='play-quiz' element={<PlayQuiz/>}></Route>
      <Route path='login-register' element={<LoginRegister/>}></Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </StrictMode>,
)
