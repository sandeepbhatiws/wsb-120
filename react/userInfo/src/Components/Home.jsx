import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'

export default function Home() {

    var [userData, setUserData] = useState([]);


  return (
    <>
        <div>
        <Form userData = {userData} setUserData = {setUserData}/>
        <Table userData = {userData} setUserData = {setUserData}/>
        </div>
    </>
  )
}
