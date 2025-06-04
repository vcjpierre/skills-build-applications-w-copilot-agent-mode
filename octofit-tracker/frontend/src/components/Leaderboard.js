import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('https://vigilant-rotary-phone-r4xxxw979g6f4pv-8000.app.github.dev/api/leaderboard/')
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(() => setEntries([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Leaderboard</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {entries && entries.length > 0 ? entries.map((entry, idx) => (
                <tr key={idx}>
                  <td>{entry.user}</td>
                  <td>{entry.score}</td>
                </tr>
              )) : (
                <tr><td colSpan="2">No leaderboard data found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
