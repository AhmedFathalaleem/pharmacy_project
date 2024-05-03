import React, { useState, useEffect } from "react";
import axios from "axios";




function UpdatePatientForm(){

    const [PatientData, setPatientData] = useState({
        id:'',
        fName:'',
        lName:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientData({ ...PatientData, [name]: value });
      };

      const getPatient = async () =>{
        try{
            const response = await axios.get('http://localhost:6001/patient/GetPatients');
            setPatientData(response.data);
        }catch(error){
            console.error("Error fetching patient", error);
        }
    };

    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:6001/patient/UpdatePatient`, PatientData);
          getPatient();
        } catch (error) {
          console.error('Error updating patient:', error);
        }
      };


      return (
        <div className="update-patient-container-wrap">
          <div className="update-patient-container">
              <h2 className="update-patient-heading">Update patient</h2>~
              <form className="update-patient-form" onSubmit={handleSubmit}>
          <div className="form-group">
              <label className="form-label">ID:</label>
              <input className="form-input" type="number" name="id" value={PatientData.id} onChange={handleChange} required />
          </div>
          <div className="form-group">
              <label className="form-label">First Name:</label>
              <input className="form-input" type="text" name="fName" value={PatientData.fName} onChange={handleChange} required />
          </div>
          <div className="form-group">
              <label className="form-label">Last Name:</label>
              <input className="form-input" type="text" name="lName" value={PatientData.lName} onChange={handleChange} required />
          </div>
          <button className="submit-button" type="submit">Update patient</button>
              </form>
          </div>
        </div>
      );

      

}


export default UpdatePatientForm;