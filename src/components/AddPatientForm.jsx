import React, { useState } from 'react';
import axios from 'axios';

const AddPatientForm = () => {
  const [PatientData, setPatientData] = useState({
    id: '',
    fName: '',
    lName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...PatientData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6001/patient/AddPatient', PatientData);
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
              <input className="form-input" type="text" name="fName" value={PatientData.fName} onChange={handleChange} required />
          </div>
          <div className="form-group">
              <label className="form-label">Last Name:</label>
              <input className="form-input" type="text" name="lName" value={PatientData.lName} onChange={handleChange} required />
          </div>
          <button className="submit-button" type="submit">Add patient</button>
      </form>
      </div>
    </div>
  );
};

export default AddPatientForm;
