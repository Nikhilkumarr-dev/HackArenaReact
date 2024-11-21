import React, { useState } from 'react';

function AcademicProgress({ user }) {
  const [progress, setProgress] = useState({
    semester: 1,
    backlogs: 0,
  });

  const handleProgressChange = (e) => {
    const { name, value } = e.target;
    setProgress({
      ...progress,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Academic Progress</h2>
      <label>
        Semester:
        <input
          type="number"
          name="semester"
          value={progress.semester}
          onChange={handleProgressChange}
          disabled
        />
      </label>
      <br />
      <label>
        Backlogs:
        <input
          type="number"
          name="backlogs"
          value={progress.backlogs}
          onChange={handleProgressChange}
        />
      </label>
      <br />
      {progress.backlogs > 4 && (
        <p style={{ color: 'red' }}>
          Warning: Your backlogs exceed the allowed limit for loan renewal!
        </p>
      )}
      <button>Update Progress</button>
    </div>
  );
}

export default AcademicProgress;
