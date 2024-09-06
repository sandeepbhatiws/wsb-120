import React, { useRef } from 'react'

export default function Form({ userData, setUserData,input, setInput }) {

    var nameRef     = useRef();
    var emailRef    = useRef();
    var mobileRef   = useRef();
    var countryRef  = useRef();


    const formHandler = (e) => {
        e.preventDefault();

        // var users = {
        //     name : e.target.name.value,
        //     email : e.target.email.value,
        //     mobile : e.target.mobile.value,
        //     country : e.target.country.value,
        // }

        var users = {
            name : nameRef.current.value,
            email : emailRef.current.value,
            mobile : mobileRef.current.value,
            country : countryRef.current.value,
        }

        if(e.target.index.value == ''){
            var finalData = [users, ...userData];
        } else {
            userData[e.target.index.value] = users;
            var finalData = userData;
        }

        
        setUserData(finalData);
        e.target.reset();
    }

    const inputHandler = (event) => {

        var data = {...input};

        data[event.target.name] = event.target.value;

        setInput(data);
        // console.log();
        // console.log(nameRef.current.value);


    }

  return (
    <div className="form-container">
        <h2>Basic Form</h2>
        <form id="formHandler" autoComplete='off' onSubmit={ formHandler }>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" value={input.name} onChange={ inputHandler } required ref={ nameRef } />
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" value={input.email} onChange={ inputHandler } required ref={emailRef}/>
            </div>
            <div className="form-group">
                <label for="mobile">Mobile Number</label>
                <input type="tel" id="mobile" name="mobile" value={input.mobile} onChange={ inputHandler } required ref={mobileRef}/>
            </div>
            <div className="form-group">
                <label for="country">Country</label>
                <select id="country" name="country" required ref={countryRef} onChange={ inputHandler }>
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                    <option value="Austraila">Austraila</option>
                </select>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    </div>
  )
}
