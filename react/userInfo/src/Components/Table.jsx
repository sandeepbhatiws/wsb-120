import React from 'react'

export default function Table({userData, setUserData}) {

    const deleteUser = (index) =>{
        if(confirm('Are you sure you want to delete ?')){
            userData.splice(index,1);
            var finalData = [...userData];
            setUserData(finalData);
        }
    }

    

  return (
    <div className="table-container">
        <h2>User Data</h2>
        <table id="data-table" border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Country</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody id="fetch-data">
                {
                    userData.map((value,index) => {
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{value.name} </td>
                                <td>{value.email}</td>
                                <td>{value.mobile}</td>
                                <td>{value.country}</td>
                                <td><button type="button" onClick={() => deleteUser(index) } >Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
