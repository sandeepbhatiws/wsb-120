import React, { useState } from 'react'

export default function ShowHide() {

    var [status, setStatus] = useState(1);
    var [input, setInput]   = useState(1);

    const showHidePassword = () => {
        setInput(!input)
    }

    var obj = {
        name : 'sandeep',
        email : 'sandeep@gmail.com',
        mobile_number : 1234567890
    }

  return (
        <>
            <div style={{ display : `${ status ? 'block' : 'none'  }` }}>
                <h1> { obj.name } </h1>
                <input type={ input ? 'password' : 'text' } />
                <button onClick={ showHidePassword }>{ input ? 'Show' : 'Hide' }</button>
            </div>
        </>
  )
}
