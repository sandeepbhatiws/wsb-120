import React, { Children, createContext } from 'react'

const Context = createContext();

export default function CommonContextAPI({children}) {

    let [cartItems, setCartItems] = useState([]);

    const addToCart = () => {

    }

    let allItems = {cartItems, setCartItems, addToCart};

  return (
    <div>
      <Context.Provider value={allItems}>
        {children}
        </Context.Provider>
    </div>
  )
}

export { Context };
