import React from 'react';
import '../style/Dashboard.css';

function Dashboard() {
  return (
    <div>
        <h1>User Info</h1>
        <p>This is the users application which uses the following api end-points.</p>
        <table>
            <thead>
            <tr>
            <th>API ENDPOINT</th>
            <th>REQUEST TYPE</th>
            <th>DESCRIPTION</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                   <td>/users</td>
                   <td>GET</td>
                   <td>Fetches all the users/resources in the collection</td> 
                </tr>
                <tr>
                    <td>/users/:id</td>
                    <td>GET</td>
                    <td>Fetches a single user/resource</td>
                </tr>
                <tr>
                    <td>/user</td>
                    <td>POST</td>
                    <td>Creates a new user/resource based on the request data</td>
                </tr>
                <tr>
                    <td>/users/:id</td>
                    <td>PUT</td>
                    <td>Replaces the entire identified user/resource with the request data</td>
                </tr>
                <tr>
                    <td>/users/:id</td>
                    <td>DELETE</td>
                    <td>Deletes the identified user/resource</td>
                </tr>
            </tbody>
        </table>
        <div>
            <p>The Users application has following features:</p>
            <ul>
                <li>Users can create a new user</li>
                <li>Users can view all users Info</li>
                <li>user can select a single user and edit/update it!</li>
                <li>User can delete a user Info at a time </li>
            </ul>
        </div>
    </div>
  )
}

export default Dashboard;

