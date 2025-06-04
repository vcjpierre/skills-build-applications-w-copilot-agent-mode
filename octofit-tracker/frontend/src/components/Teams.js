import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://vigilant-rotary-phone-r4xxxw979g6f4pv-8000.app.github.dev/api/teams/')
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(() => setTeams([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Teams</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams && teams.length > 0 ? teams.map((team, idx) => (
                <tr key={idx}>
                  <td>{team.name}</td>
                  <td>{team.members ? team.members.length : 0}</td>
                </tr>
              )) : (
                <tr><td colSpan="2">No teams found.</td></tr>
              )}
            </tbody>
          </table>
          <button className="btn btn-success mt-2">Add Team</button>
        </div>
      </div>
    </div>
  );
}

export default Teams;
