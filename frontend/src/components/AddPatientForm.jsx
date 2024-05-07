import React, { useState } from 'react';
import axios from 'axios';

const AddPatientForm = () => {
  const [PatientData, setPatientData] = useState({
    id: '',
    Name: '',
    UserId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...PatientData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:17088/Patient', PatientData);
      console.log('Patient added:', response.data);
      
      
      //RELOAD THE TABLE HERE

    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  return (
    <div className="add-patient-container-wrap">
      <div className="add-patient-container">
      <h2 className="add-patient-heading">Add Patient</h2>
      <form className="add-patient-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
              <label className="form-label">First Name:</label>
              <input className="form-input" type="text" name="Name" value={PatientData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
              <label className="form-label">User ID</label>
              <input className="form-input" type="number" name="UserId" value={PatientData.userId} onChange={handleChange} required />
          </div>
          <button className="submit-button" type="submit">Add patient</button>
      </form>
      </div>
    </div>
  );
};

export default AddPatientForm;
