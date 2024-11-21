import React, { useState } from 'react';

function LoanApplication({ user, onLogin }) {
  const [formData, setFormData] = useState({
    studentName: '',
    course: '',
    certificate: '',
    cgpa: '',
    backlogs: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the loan application (e.g., API call)
    alert('Loan application submitted successfully!');
  };

  return (
    <div>
      <h2>Loan Application</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Course:
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Educational Certificate (e.g., 10th, 12th, B.Tech):
          <input
            type="file"
            name="certificate"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          CGPA:
          <input
            type="number"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Number of Backlogs:
          <input
            type="number"
            name="backlogs"
            value={formData.backlogs}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default LoanApplication;
