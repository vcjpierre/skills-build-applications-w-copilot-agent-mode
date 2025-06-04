import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://vigilant-rotary-phone-r4xxxw979g6f4pv-8000.app.github.dev/api/activities/')
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(() => setActivities([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Activities</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Type</th>
                <th>Duration (min)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {activities && activities.length > 0 ? activities.map((activity, idx) => (
                <tr key={idx}>
                  <td>{activity.activity_type}</td>
                  <td>{activity.duration}</td>
                  <td>{activity.date ? new Date(activity.date).toLocaleString() : ''}</td>
                </tr>
              )) : (
                <tr><td colSpan="3">No activities found.</td></tr>
              )}
            </tbody>
          </table>
          <button className="btn btn-primary mt-2">Add Activity</button>
        </div>
      </div>
    </div>
  );
}

export default Activities;
