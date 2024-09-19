import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

const CommonContext = createContext();

export default function Context({children}) {

    var getCartItems = JSON.parse(localStorage.getItem('cartItems'));

    var getCartItems = getCartItems ? getCartItems : [];
    let [cartItems, setCartItems] = useState(getCartItems);

    const addToCart = (product) => {

        let data = cartItems.filter((value) => {
            if(value.id == product.id){
                return value;
            }
        })

        if(data.length == 0){
            let  cart = {
                id : product.id,
                name : product.name,
                image : product.image,
                price : product.price,
                qty : 1
            }
    
            var finalCart = [cart,...cartItems];
            setCartItems(finalCart);
        } else {
            cartItems.map((value) => {
                if(value.id == product.id){
                    value.qty = value.qty+1;
                }
            })
            setCartItems(cartItems);
        }

        var finalCart = [...cartItems];
        localStorage.setItem('cartItems',JSON.stringify(finalCart));
        
        toast.success('Product added to cart !!');

    }

    const deleteCart = (id) => {
        cartItems.splice(id,1);
        var finalCart = [...cartItems];
        setCartItems(finalCart);

        var finalCart = [...cartItems];
        localStorage.setItem('cartItems',JSON.stringify(finalCart));
    }

    let minus=(product_id)=>{

        cartItems.map((value) => {
            if(value.id == product_id){
                if(value.qty > 1){
                    value.qty = value.qty-1;
                }
            }
        })
        setCartItems(cartItems);

        var finalCart = [...cartItems];
        setCartItems(finalCart);
        localStorage.setItem('cartItems',JSON.stringify(finalCart));
    }
    let add=(product_id)=>{
        cartItems.map((value) => {
            if(value.id == product_id){
                if(value.qty < 5){
                    value.qty = value.qty+1;
                }
            }
        })

        var finalCart = [...cartItems];
        setCartItems(finalCart);
        localStorage.setItem('cartItems',JSON.stringify(finalCart));
    }

    const emptyCart = () => {
        setCartItems([]);
        localStorage.clear('cartItems');
    }

    let allItems = {cartItems, setCartItems, addToCart, deleteCart, minus, add, emptyCart }

  return (
    <div>
        <CommonContext.Provider value={allItems}>
            {children}
        </CommonContext.Provider>
    </div>
  )
}

export {CommonContext};