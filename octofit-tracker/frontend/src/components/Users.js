import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://vigilant-rotary-phone-r4xxxw979g6f4pv-8000.app.github.dev/api/users/')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => setUsers([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Users</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users && users.length > 0 ? users.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              )) : (
                <tr><td colSpan="2">No users found.</td></tr>
              )}
            </tbody>
          </table>
          <button className="btn btn-info mt-2">Add User</button>
        </div>
      </div>
    </div>
  );
}

export default Users;
