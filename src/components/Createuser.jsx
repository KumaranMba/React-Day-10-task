import React, { useEffect } from 'react';
 

function Createuser({addUserHandler,newnameRef,newName,setNewName,newusername,setNewUserName,newuseremail,setNewUserEmail,
    newaddresssuite,setNewAddressSuite,newaddressstreet,newcity,setNewCity,newzipcode,setNewZipCode,newgeolat,setNewGeoLat,
    newgeolng,setNewGeoLng,newphonenum,setNewPhoneNum, newwebsite, newcompanyname,setNewCompanyName,newcompanycatchphrase,
    setCompanyNewCatchPhrase, newCompanybs,setNewCompanyBs}) {

       useEffect(()=>{
       newnameRef.current.focus();
       },[]);
  return (
    <div>
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

export default Createuser;