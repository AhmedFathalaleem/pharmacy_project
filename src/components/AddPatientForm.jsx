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
    <div>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="number" name="id" value={PatientData.id} onChange={handleChange} required />
        </div>
        <div>
          <label>fName:</label>
          <input type="text" name="fName" value={PatientData.fName} onChange={handleChange} required />
        </div>
        <div>
          <label>lName:</label>
          <input type="text" name="lName" value={PatientData.lName} onChange={handleChange} required />
        </div>
        <button type="submit">Add patient</button>
      </form>
    </div>
  );
};

export default AddPatientForm;
