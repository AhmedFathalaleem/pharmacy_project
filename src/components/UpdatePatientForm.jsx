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
        <div>
          <h2>Update patient</h2>
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
            <button type="submit">Update patient</button>
          </form>
        </div>
      );

      

}


export default UpdatePatientForm;