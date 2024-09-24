import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CommonContext = createContext();

export default function Context({children}) {

    // const navigate = useNavigate();

    var firebaseLogin = JSON.parse(localStorage.getItem('firebaseLogin'));
    var firebaseLogin = firebaseLogin ? true : false;

    var [isLogin,setLogin] = useState(firebaseLogin);

    const logout = () => {
        localStorage.clear('firebaseLogin');
        setLogin(false);
        // navigate('/');
    }

    let allItems = { isLogin, setLogin, logout }

  return (
    <div>
        <CommonContext.Provider value={allItems}>
            {children}
        </CommonContext.Provider>
    </div>
  )
}

export {CommonContext};