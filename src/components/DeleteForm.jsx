import React, { useEffect } from 'react';
import Deleteuser from './Deleteuser';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DeleteForm({selecteduserId,users,setUsers,fetchUsers}) {
  
    let selectedUser= users.find(user=> user.id == selecteduserId);
    console.log(selectedUser);

    const navigate = useNavigate();

   const Deleteuser= async()=>{
    console.log('deleting user...');
    try{
        const response = await axios.delete(`http://localhost:3001/users/${selecteduserId}`);
        console.log('note deleted successfully...');
        
        //fetch all the user again
        fetchUsers();

        navigate("/read");

    }catch(error){
            console.log('Error deleting note:',error);
    }


   }
  return (
    <div>
    <br/><br/>
        <label>
            <p><strong>ID:</strong>{selectedUser.id}</p>
            <p><strong>Name:</strong>{selectedUser.name}</p>
            <p><strong>Username:</strong>{selectedUser.username}</p>
            <p><strong>Email:</strong>{selectedUser.email}</p>
            <p><strong><u>address</u></strong></p>
            <p>street:{selectedUser.address.street}</p>
            <p>suite:{selectedUser.address.suite}</p>
            <p>city:{selectedUser.address.city}</p>
            <p>zipcode:{selectedUser.address.zipcode}</p>
            <p><strong><u>geo:</u></strong></p>
            <p>lat:{selectedUser.address.geo.lat}</p>
            <p>lng:{selectedUser.address.geo.lng}</p>
            <p><strong>phone:</strong>{selectedUser.phone}</p>
            <p><strong>website:</strong>{selectedUser.website}</p>
            <p><strong><u>company:</u></strong></p>
            <p>name:{selectedUser.company.name}</p>
            <p>catchPhrase:{selectedUser.company.catchPhrase}</p>
            <p>bs:{selectedUser.company.bs}</p>
            <br/>
            <button onClick={Deleteuser}>Delete User</button>
        </label>
    </div>
  )
}

export default DeleteForm;