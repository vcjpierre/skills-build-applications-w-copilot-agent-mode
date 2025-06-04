import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://vigilant-rotary-phone-r4xxxw979g6f4pv-8000.app.github.dev/api/workouts/')
      .then(res => res.json())
      .then(data => setWorkouts(data))
      .catch(() => setWorkouts([]));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Workouts</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {workouts && workouts.length > 0 ? workouts.map((workout, idx) => (
                <tr key={idx}>
                  <td>{workout.name}</td>
                  <td>{workout.description}</td>
                </tr>
              )) : (
                <tr><td colSpan="2">No workouts found.</td></tr>
              )}
            </tbody>
          </table>
          <button className="btn btn-warning mt-2">Add Workout</button>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
