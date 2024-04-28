import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Updateuser({selectedID,users,setUsers,fetchUsers}) {

    const[selectedUser,setSelectedUser]= useState(null);
    const [editednewName,setEditedNewName] = useState('');
    const [editednewusername,setEditedNewUserName] = useState('');
    const [editednewuseremail,setEditedNewUserEmail] = useState('');
    const [editednewaddresssuite,setEditedNewAddressSuite] = useState('');
    const [editednewaddressstreet,setEditedNewAddressStreet] = useState('');
    const [editednewcity,setEditedNewCity] = useState('');
    const [editednewzipcode,setEditedNewZipCode] = useState('');
    const [editednewgeolat,setEditedNewGeoLat] = useState('');
    const [editednewgeolng,setEditedNewGeoLng] = useState('');
    const [editednewphonenum,setEditedNewPhoneNum] = useState('');
    const [editednewwebsite,setEditedNewWebsite] = useState('');
    const [editednewcompanyname,setEditedNewCompanyName] = useState('');
    const [editednewcompanycatchphrase,setEditedCompanyNewCatchPhrase] = useState('');
    const [editednewCompanybs,setEditedNewCompanyBs] = useState('');

    const fetchuser = async ()=>{
        try{
            const response = await axios.get(`http://localhost:3001/users/${selectedID}`);
            // console.log(response.data);
            if(response.data){
                setSelectedUser(response.data);
                setEditedNewName(response.data.name);
                setEditedNewUserName(response.data.username);
                setEditedNewUserEmail(response.data.email);
                setEditedNewAddressSuite(response.data.address.suite);
                setEditedNewAddressStreet(response.data.address.street);
                setEditedNewCity(response.data.address.city);
                setEditedNewZipCode(response.data.address.zipcode);
                setEditedNewGeoLat(response.data.address.geo.lat);
                setEditedNewGeoLng(response.data.address.geo.lng);
                setEditedNewPhoneNum(response.data.phone);
                setEditedNewWebsite(response.data.website);
                setEditedNewCompanyName(response.data.company.name);
                setEditedCompanyNewCatchPhrase(response.data.company.catchPhrase);
                setEditedNewCompanyBs(response.data.company.bs);

            }

        }catch(error){
            console.log('Error fetching the user:',error);
        }
    } 

    useEffect(()=>{
        fetchuser();
    },[selectedID]);

    const Updateuser = (event) =>{
        event.preventDefault();
        console.log('updating the user...');

            // prepare the object to update
            let editUserDetails={
                id :selectedUser.id ,
                name: editednewName,
                username: editednewusername,
                email: editednewuseremail,
                address: {
                street: editednewaddressstreet,
                suite : editednewaddresssuite,
                city :  editednewcity,
                zipcode : editednewzipcode,
                geo : {
                lat : editednewgeolat,
                lng : editednewgeolng
                }
                },
                phone : editednewphonenum,
                website : editednewwebsite,
                company : {
                name : editednewcompanyname,
                catchPhrase : editednewcompanycatchphrase,
                bs : editednewCompanybs,
          
              }
            }
            axios
               .put(`http://localhost:3001/users/${selectedUser.id}`,editUserDetails)
               .then(response=>{
                console.log(response);
                console.log('Note updated successfully...');

                // Update the state
                fetchUsers();
               })
               .catch((error)=>{
                console.log(`Error updateing user:`,error);
               })
            
    }


  return (
    <div>
          <h3>Update Form</h3>
         <form onSubmit={Updateuser}>
      <label>
        Name: &nbsp;&nbsp;
        <input
          type='text'
          value={editednewName}
          onChange={e => setEditedNewName(e.target.value)}
          
          
        />
      </label><br/>
      <br/> <label>
        Username: &nbsp;&nbsp;
        <input
          type="text"
          value={editednewusername}
          onChange={e=>setEditedNewUserName(e.target.value)}
         
        />
      </label><br/>
      <br/> <label>
        Email: &nbsp;&nbsp;
        <input
          type="email"
          value={editednewuseremail}
          onChange={e=>setEditedNewUserEmail(e.target.value)}
        />
      </label><br/>
      <br/> <label>
        <b>Address</b><br/>
        Suite: &nbsp;&nbsp;
        <input
          type="text"
          value={editednewaddresssuite}
          onChange={e=>setEditedNewAddressSuite(e.target.value)}
      
        />&nbsp;&nbsp;
        street: &nbsp;&nbsp;
        <input
          type="text"
          value={editednewaddressstreet}
          onChange={e=> setEditedNewAddressStreet(e.target.value)}
         
        />
      </label><br/>
      <br/> <label>
        City: &nbsp;&nbsp;
        <input
          type="text"
          value={editednewcity}
          onChange={e=>setEditedNewCity(e.target.value)}
          
        />&nbsp;&nbsp;
        zipcode: &nbsp;&nbsp;
        <input
          type= "text"
          value={editednewzipcode}
          onChange={e=>setEditedNewZipCode(e.target.value)}
        />
      </label><br/>
      <label><br/>
      <b>Geographic Location</b><br/>
      <br/>
        Lat: &nbsp;&nbsp;
        <input
          type="text"
          value={editednewgeolat}
          onChange={e=>setEditedNewGeoLat(e.target.value)}
         
        />&nbsp;&nbsp;
        Lng: &nbsp;&nbsp;
        <input
          type="text"
          value={editednewgeolng}
          onChange={e=>setEditedNewGeoLng(e.target.value)}
          
        />
      </label><br/>
      <label><br/>
        Phone: &nbsp;&nbsp;
        <input
          type="tel"
          value={editednewphonenum}
          onChange={e=>setEditedNewPhoneNum(e.target.value)}
          
        />
      </label><br/>
      <label><br/>
        Website:&nbsp;&nbsp;
        <input 
        type='text'
        value={editednewwebsite}
        onChange={e=>setEditedNewWebsite(e.target.value)}
       
        />
      </label><br/>
      <label><br/>
        <b>Company:</b><br/>
        <br/>
        name:&nbsp;&nbsp;
        <input
        type='text'
        value={editednewcompanyname}
        onChange={e=>setEditedNewCompanyName(e.target.value)}
        
        />
      </label><br/>
      <label><br/>
      catchPhrase:&nbsp;&nbsp;
        <input 
        type='text'
        value={editednewcompanycatchphrase}
        onChange={e=>setEditedCompanyNewCatchPhrase(e.target.value)}
       
        />
      </label><br/>
      <label><br/>
       bs:&nbsp;&nbsp;
        <input 
        type='text'
        value={editednewCompanybs}
        onChange={e=>setEditedNewCompanyBs(e.target.value)}
       
        />
      </label><br/>
      <br/>
      <button type='submit'>Update an existing user</button>
    </form>
    </div>
  )
}

export default Updateuser;