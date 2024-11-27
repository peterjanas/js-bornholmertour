import React, { useState, useEffect } from "react";
import { fetchData } from "../FetchData";
import "../styles/admin.css";




const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users when the component loads
    fetchData("http://localhost:3000/users", (data) => {
      setUsers(data); // Assume the API returns an array of users
    }, "GET");
  }, []);

  return (
    <div className="admin-container">
      <h2>Admin Page</h2>
      <h3>List of Users</h3>
      {users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Login</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userid}>
                <td>{user.userid}</td>
                <td>{user.login}</td>
                <td>{user.roles.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default Admin;
