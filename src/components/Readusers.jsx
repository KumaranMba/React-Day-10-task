import React from 'react';

function Readusers({users}) {
  return (
    <div>
         <h1>USERS</h1>
    <ul>
      {
        users.map((user)=>(
          <div key={user.id}>
           <li >Name:{user.name}</li><br></br>
          <li>Username:{user.username}</li><br></br>
          <li>Email:{user.email}</li><br></br>
          <li>Address:<br></br>
                      {user.address.suite},<br></br>
                      {user.address.street},<br></br>
                      {user.address.city},<br></br>
                      <b>zipcode - </b>{user.address.zipcode}<br></br>
          </li><br></br>
          <li>Geo:lat{user.address.geo.lat}, lng{user.address.geo.lng}</li>
          <li>phone: {user.phone}</li>
          <li>website: {user.website}</li>
          <li>company:<br></br>
          {user.company.name},<br></br>
          {user.company.catchPhrase},<br></br>
          {user.company.bs}
          </li>
        
          <br></br>
          <hr></hr>
          </div>
        )
      )
      }
    </ul>
    </div>
  )
}

export default Readusers;