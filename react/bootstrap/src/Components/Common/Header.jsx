import axios from 'axios';
import React, { useEffect } from 'react'
import logo from '../../assets/ws-cube-white-logo.svg';

export default function Header() {

  return (
    <div className='container-fluid bg-black text-center p-3 position-sticky top-0'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <img src={ logo }/>
                </div>
            </div>
        </div>
    </div>
  )
}
