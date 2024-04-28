import React, { useState } from 'react';
import DeleteForm from './DeleteForm';

function Deleteuser({users,setUsers,fetchUsers}) {

    const[selecteduserId,setSelectedUserID] = useState('select an ID');
    const selectIdHandler =(e)=>{
        console.log(e.target.value);
        setSelectedUserID(e.target.value)
    }

  return (
    <div>
        <h2>Delete User</h2>
        <label>
            selet the user Id to Delete:&nbsp;&nbsp;
            <select value={selecteduserId} onChange={selectIdHandler } >
               <option>{`select an ID`}</option>
               {
                users.map(user=>{
                    return <option key={user.id}>{user.id}</option>
               })
               }
            </select>
        </label>
        <div>
            {
                selecteduserId !== 'select an ID'&&<DeleteForm 
                    selecteduserId={selecteduserId}
                    users={users}
                    setUsers={setUsers}
                    fetchUsers={fetchUsers}
                />
            }
        </div>
    </div>
  )
}

export default Deleteuser;