import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

const CommonContext = createContext();

export default function Context({children}) {

    let [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {

        let  cart = {
            id : product.id,
            name : product.name,
            image : product.image,
            price : product.price,
            qty : 1
        }

        var finalCart = [cart,...cartItems];
        setCartItems(finalCart);

        toast.success('Product added to cart !!');

    }

    const deleteCart = (id) => {
        cartItems.splice(id,1);
        var finalCart = [...cartItems];
        setCartItems(finalCart);
    }

    let allItems = {cartItems, setCartItems, addToCart, deleteCart }

  return (
    <div>
        <CommonContext.Provider value={allItems}>
            {children}
        </CommonContext.Provider>
    </div>
  )
}

export {CommonContext};