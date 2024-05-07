import React, { useState, useEffect } from "react";
import axios from "axios";




function UpdateMedicineForm(){

    const [medicineData, setMedicineData] = useState({
        Id:'',
        Name: '',
        CategoryId: '',
        AdminId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedicineData({ ...medicineData, [name]: value });
      };

      const getMedicine = async () =>{
        try{
            const response = await axios.get('http://localhost:17088/medicines');
            setMedicineData(response.data);
        }catch(error){
            console.error("Error fetching meds", error);
        }
    };

    
    const handleSubmit = async (id) => {
        try {
          await axios.put(`http://localhost:17088/medicines/${medicineData.Id}`, medicineData);
          getMedicine();
        } catch (error) {
          console.error('Error updating medicine:', error);
        }
      };


      return (
        <div className="update-medication-container">
    <h2 className="update-medication-heading">Update medication</h2>
    <form className="update-medication-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label className="form-label">ID:</label>
            <input className="form-input" type="number" name="Id" value={medicineData.id} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label className="form-label">Name:</label>
            <input className="form-input" type="text" name="Name" value={medicineData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label className="form-label">Category ID:</label>
            <input className="form-input" type="number" name="CategoryId" value={medicineData.categoryId} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label className="form-label">Admin ID:</label>
            <input className="form-input" type="text" name="AdminId" value={medicineData.adminId} onChange={handleChange} required />
        </div>
        <button className="submit-button" type="submit">Update Medication</button>
    </form>
</div>

      );

      

}


export default UpdateMedicineForm;