import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'

export default function Home() {

    var users = [
      {
        "id": 1,
        "name": "Emily Johnson",
        "email": "emily.johnson@x.dummyjson.com",
        "mobile": "+81 965-431-3024",
        "country": "United States"
      },
      {
        "id": 2,
        "name": "Michael Williams",
        "email": "michael.williams@x.dummyjson.com",
        "mobile": "+49 258-627-6644",
        "country": "United States"
      }];


    var [userData, setUserData] = useState(users);

    const [input, setInput] = useState({
        "id": '',
        "name": '',
        "email": '',
        "mobile": '',
        "country": ''
    });

  return (
    <>
        <div>
        <Form userData = {userData} setUserData = {setUserData} input = {input} setInput = {setInput}/>
        <Table userData = {userData} setUserData = {setUserData}  input = {input} setInput = {setInput}/>
        </div>
    </>
  )
}
