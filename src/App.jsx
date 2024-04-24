import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';


function App() {

  // Define a state to store the users from props
  const [users, setUsers] = useState([]);

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

  const fetchUsers=async() =>{
    try{
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    }catch(error){
      console.log("Failed to fetch User data:",error);
    }
  }

  useEffect(()=>{
    newnameRef.current.focus();
  },[]);

  useEffect(()=>{
    fetchUsers();
  },[])

  // A  function that handles submitting the add user form
  const addUserHandler = (event)=>{
    event.preventDefault();
    // create a new users object
    let newUser={
      id : users.length + 1,
      name: newName,
      username: newusername,
      email: newuseremail,
      address: {
      street: newaddresssuite,
      suite : newaddressstreet,
      city :  newcity,
      zipcode : newzipcode,
      geo : {
      lat : newgeolat,
      lng : newgeolng
      }
      },
      phone : newphonenum,
      website : newwebsite,
      company : {
      name : newcompanyname,
      catchPhrase : newcompanycatchphrase,
      bs : newCompanybs,

    }
  }
  // setUsers(users.concat(newUser));
  console.log('adding a new note...');
  axios.post('http://localhost:3001/users',newUser)
  .then(response=>{
    console.log('note added successfully...');
  })

  // claer the input object
  setNewName('');
  setNewUserName('');
  setNewUserEmail('');
  setNewAddressSuite('');
  setNewAddressStreet('');
  setNewCity('');
  setNewZipCode('');
  setNewGeoLat('');
  setNewGeoLng('');
  setNewPhoneNum('');
  setNewWebsite('');
  setNewCompanyName('');
  setCompanyNewCatchPhrase('');
  setNewCompanyBs('');
  newnameRef.current.focus();

  fetchUsers();
}
  

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
    <form onSubmit={addUserHandler}>
      <label>
        Name: &nbsp;&nbsp;
        <input
          type='text'
          ref={newnameRef}
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
      </label><br/>
      <br/> <label>
        Username: &nbsp;&nbsp;
        <input
          type="text"
          value= {newusername}
          onChange={e=>setNewUserName(e.target.value)}
        />
      </label><br/>
      <br/> <label>
        Email: &nbsp;&nbsp;
        <input
          type="email"
          value= {newuseremail}
          onChange={e=>setNewUserEmail(e.target.value)}
        />
      </label><br/>
      <br/> <label>
        <b>Address</b><br/>
        Suite: &nbsp;&nbsp;
        <input
          type="text"
          value= {newaddresssuite}
          onChange={e=>setNewAddressSuite(e.target.value)}
        />&nbsp;&nbsp;
        street: &nbsp;&nbsp;
        <input
          type="text"
          value= {newaddressstreet}
          onChange={e=>setNewAddressStreet(e.target.value)}
        />
      </label><br/>
      <br/> <label>
        City: &nbsp;&nbsp;
        <input
          type="text"
          value= {newcity}
          onChange={e=>setNewCity(e.target.value)}
        />&nbsp;&nbsp;
        zipcode: &nbsp;&nbsp;
        <input
          type= "text"
          value= {newzipcode}
          onChange={e=>setNewZipCode(e.target.value)}
        />
      </label><br/>
      <label><br/>
      <b>Geographic Location</b><br/>
      <br/>
        Lat: &nbsp;&nbsp;
        <input
          type="text"
          value= {newgeolat}
          onChange={e=>setNewGeoLat(e.target.value)}
        />&nbsp;&nbsp;
        Lng: &nbsp;&nbsp;
        <input
          type="text"
          value= {newgeolng}
          onChange={e=>setNewGeoLng(e.target.value)}
        />
      </label><br/>
      <label><br/>
        Phone: &nbsp;&nbsp;
        <input
          type="tel"
          value={newphonenum}
          onChange={e=>setNewPhoneNum(e.target.value)}
        />
      </label><br/>
      <label><br/>
        Website:&nbsp;&nbsp;
        <input 
        type='text'
        value={newwebsite}
        onChange={e=>setNewWebsite(e.target.value)}
        />
      </label><br/>
      <label><br/>
        <b>Company:</b><br/>
        <br/>
        name:&nbsp;&nbsp;
        <input
        type='text'
        value={newcompanyname}
        onChange={e=>setNewCompanyName(e.target.value)}
        />
      </label><br/>
      <label><br/>
      catchPhrase:&nbsp;&nbsp;
        <input 
        type='text'
        value={newcompanycatchphrase}
        onChange={e=>setCompanyNewCatchPhrase(e.target.value)}
        />
      </label><br/>
      <label><br/>
       bs:&nbsp;&nbsp;
        <input 
        type='text'
        value={newCompanybs}
        onChange={e=>setNewCompanyBs(e.target.value)}
        />
      </label><br/>
      <br/>
      <button type='submit'>Add a new user</button>
    </form>
    </div>
  )
}

export default App;
