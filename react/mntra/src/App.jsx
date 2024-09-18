import { useState } from 'react'

import './App.css'
import Header from './Componet/Common/Header'


import Productlisting from './Componet/Product/Productlisting'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Productlisting/>
 
    </>
  )
}

export default App
