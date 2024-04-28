import React, { useState } from 'react';
import Updateuser from './Updateuser';

function Edituser({users,setUsers,fetchUsers}) {
    const[selectedID,setSelectedID] = useState('select an ID');

    const selectIDHandler=(event)=>{
        console.log(event.target.value);
        setSelectedID(event.target.value);
    }
  return (
    <div>
        <h2>Edit User</h2>
        <label>
            select the user ID to Edit &nbsp;&nbsp;
            <select 
            value={selectedID}
            onChange={selectIDHandler} >
                <option>{'select an ID'}</option>
                {
                    users.map(user=>
                         <option key={user.id}>{user.id}</option> 
                    )
                }
            </select>
        </label>
        <div>
            {selectedID !== 'select an ID' && <Updateuser selectedID={selectedID} users={users} setUsers={setUsers} fetchUsers={fetchUsers}/>}
        </div>
              
    </div>
  )
}

export default Edituser;