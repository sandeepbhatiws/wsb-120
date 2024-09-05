import React from 'react'

export default function Form({ userData, setUserData }) {

    const formHandler = (e) => {
        e.preventDefault();

        var users = {
            name : e.target.name.value,
            email : e.target.email.value,
            mobile : e.target.mobile.value,
            country : e.target.country.value,
        }

        var finalData = [users, ...userData];
        setUserData(finalData);
        e.target.reset();
    }

  return (
    <div className="form-container">
        <h2>Basic Form</h2>
        <form id="formHandler" autoComplete='off' onSubmit={ formHandler }>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label for="mobile">Mobile Number</label>
                <input type="tel" id="mobile" name="mobile" required />
            </div>
            <div className="form-group">
                <label for="country">Country</label>
                <select id="country" name="country" required>
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
