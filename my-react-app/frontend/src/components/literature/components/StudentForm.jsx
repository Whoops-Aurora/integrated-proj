// studentform.jsx
import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    usn: '',
    branch: '',
    phoneNumber: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form data validation (add your validation logic here)

    // Prepare form data for submission
    const data = new FormData();
    data.append('studentName', formData.studentName);
    data.append('usn', formData.usn);
    data.append('branch', formData.branch);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('file', formData.file);

    try {
      alert('Form submitted successfully!');
      
      // Send form data to the server
      await axios.post('http://localhost:5000/submit', data);

      // Handle success or redirect the user
      alert('Form submitted successfully!');
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentName">Student Name:</label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
        />

        <label htmlFor="usn">USN:</label>
        <input
          type="text"
          id="usn"
          name="usn"
          placeholder=""
          value={formData.usn}
          onChange={handleChange}
          required
        />

        <label htmlFor="branch">Select Branch:</label>
        <select
          id="branch"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
        >
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="ME">ME</option>
          <option value="ME">CSE-AI</option>
          <option value="ME">CE</option>
          <option value="ME">AR</option>
          <option value="ME">EE</option>
          <option value="ME">ECE</option>
        </select>

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          pattern="[0-9]{10}"
          placeholder=""
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="file">Upload File (Doc/PDF):</label>
        <input
          type="file"
          id="file"
          name="file"
          accept=".doc,.docx,.pdf"
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
