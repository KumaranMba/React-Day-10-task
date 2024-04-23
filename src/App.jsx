import React, { useRef, useState } from 'react';

// Read the users list and render it here

function App(props) {

  // Define a state to store the users from props
  const [users, setUsers] = useState(props.users);

    // states for adding new user form
  const [newName,setNewName] = useState('');
  const [newusername,setNewUserName] = useState('');
  const [newuseremail,setNewUserEmail] = useState('');
  const [newaddresssuite,setNewAddressSuite] = useState('');
  const [newaddressstreet,setNewAddressStreet] = useState('');
  const [newcity,setNewCity] = useState('');
  const [newzipcode,setNewZipCode] = useState('');
  const [newgeolat,setNewGeoLat] = useState('');
  const [newgeolng,setNewGeoLng] = useState('');
  const [newphonenum,setNewPhoneNum] = useState('');
  const [newwebsite,setNewWebsite] = useState('');
  const [newcompanyname,setNewCompanyName] = useState('');
  const [newcompanycatchphrase,setCompanyNewCatchPhrase] = useState('');
  const [newCompanybs,setNewCompanyBs] = useState('');


  // define a contentRef to access and manipulate the content element
   const newnameRef = useRef(null);

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
    <h2>Add a New User</h2>
    <form>
      <label>
        Name: &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type='text'
          ref={newnameRef}
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
      </label><br></br>
      <br></br> <label>
        Username: &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          value= {newusername}
          onChange={e=>setNewUserName(e.target.value)}
        />
      </label><br></br>
      <br></br> <label>
        Email: &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="email"
          value= {newuseremail}
          onChange={e=>setNewUserEmail(e.target.value)}
        />
      </label><br></br>
      <br></br> <label>
        <b>Address</b><br></br>
        Suite: &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          value= {newaddresssuite}
          onChange={e=>setNewAddressSuite(e.target.value)}
        />&nbsp;&nbsp;&nbsp;&nbsp;
        street: &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          value= {newaddressstreet}
          onChange={e=>setNewAddressStreet(e.target.value)}
        />
      </label><br></br>
      <br></br> <label>
        City: &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          value= {newcity}
          onChange={e=>setNewCity(e.target.value)}
        />&nbsp;&nbsp;&nbsp;&nbsp;
        zipcode: &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type= "text"
          value= {newzipcode}
          onChange={e=>setNewZipCode(e.target.value)}
        />
      </label><br></br>
      <label><br></br>
      <b>Geographic Location</b><br></br>
      <br></br>
        Lat: &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          value= {newgeolat}
          onChange={e=>setNewGeoLat(e.target.value)}
        />&nbsp;&nbsp;&nbsp;&nbsp;
        Lng: &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="text"
          value= {newgeolng}
          onChange={e=>setNewGeoLng(e.target.value)}
        />
      </label><br></br>
      <label><br></br>
        Phone: &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          value={newphonenum}
          onChange={e=>setNewPhoneNum(e.target.value)}
        />
      </label><br></br>
      <label><br></br>
        Website:&nbsp;&nbsp;
        <input 
        type='text'
        value={newwebsite}
        onChange={e=>setNewWebsite(e.target.value)}
        />
      </label><br></br>
      <label><br></br>
        <b>Company:</b><br></br>
        <br></br>
        name:&nbsp;&nbsp;&nbsp;&nbsp;
        <input 
        type='text'
        value={newcompanyname}
        onChange={e=>setNewCompanyName(e.target.value)}
        />
      </label><br></br>
      <label><br></br>
      catchPhrase:&nbsp;&nbsp;
        <input 
        type='text'
        value={newcompanycatchphrase}
        onChange={e=>setCompanyNewCatchPhrase(e.target.value)}
        />
      </label><br></br>
      <label><br></br>
       bs:&nbsp;&nbsp;
        <input 
        type='text'
        value={newCompanybs}
        onChange={e=>setNewCompanyBs(e.target.value)}
        />
      </label><br></br>
    </form>
    </div>
  )
}

export default App;
