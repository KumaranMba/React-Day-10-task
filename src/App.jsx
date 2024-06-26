import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Readusers from './components/Readusers';
import Createuser from './components/Createuser';
import{Link,Route,BrowserRouter as Router, Routes} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Edituser from './components/Edituser';
import Deleteuser from './components/Deleteuser';


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

  //  Function that is used  to get all of the data from the server.
  const fetchUsers=async() =>{
    try{
      const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
    }catch(error){
      console.log("Failed to fetch User data:",error);
    }
  }

 // Call the function when the component mounts
 
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
  axios
  .post('http://localhost:3001/users',newUser)
  .then(response=>{
    console.log('note added successfully...');
  })

  // clear the input object
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
// Adding style to the Navbar elements using CSS in JS
  const padding= {
    paddingRight:20,
  }  

  return (
   <Router>
    <div>
      <Link to='/' style={padding}>Dashboard</Link>
      <Link to='/read' style={padding}>Read user</Link>
      <Link to='/create' style={padding}>Create User</Link>
      <Link to='/update' style={padding}>Update User</Link>
      <Link to= '/delete' style={padding}>Delete user</Link>
    </div>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path="/read" element={<Readusers users={users}/>}/>
      <Route path="/create" element={<Createuser addUserHandler={addUserHandler} newnameRef={newnameRef} newName={newName} setNewName={setNewName}
      newusername={newusername} setNewUserName={setNewUserName} newuseremail={newuseremail} setNewUserEmail={setNewUserEmail}
      newaddresssuite={newaddresssuite} setNewAddressSuite={setNewAddressSuite} newaddressstreet={newaddressstreet} newcity={newcity} 
      setNewCity={setNewCity} newzipcode={newzipcode} setNewZipCode={setNewZipCode} newgeolat={newgeolat} setNewGeoLat={setNewGeoLat}
      newgeolng={newgeolng} setNewGeoLng={setNewGeoLng} newphonenum={newphonenum} setNewPhoneNum={setNewPhoneNum} newwebsite={newwebsite}
      newcompanyname={newcompanyname} setNewCompanyName={setNewCompanyName} newcompanycatchphrase={newcompanycatchphrase}
      setCompanyNewCatchPhrase={setCompanyNewCatchPhrase} newCompanybs={newCompanybs} setNewCompanyBs={setNewCompanyBs}
  />}/>
      <Route path='/update' element={<Edituser users={users} setUsers={setUsers} fetchUsers={fetchUsers}/>} />
      <Route path='/delete' element={<Deleteuser users={users} setUsers={setUsers} fetchUsers={fetchUsers}/>}/>
    </Routes>
   </Router>
  )
}

export default App;
