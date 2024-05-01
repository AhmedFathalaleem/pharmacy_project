import React, { useState, useEffect } from "react";
import axios from "axios";




function UpdateMedicineForm(){

    const [medicineData, setMedicineData] = useState({
        id:'',
        name:'',
        price:'',
        category:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedicineData({ ...medicineData, [name]: value });
      };

      const getMedicine = async () =>{
        try{
            const response = await axios.get('http://localhost:6001/meds/GetMedicine');
            setMedicineData(response.data);
        }catch(error){
            console.error("Error fetching meds", error);
        }
    };

    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:6001/meds/UpdateMedicine`, medicineData);
          getMedicine();
        } catch (error) {
          console.error('Error updating medication:', error);
        }
      };


      return (
        <div class="update-medication-container">
    <h2 class="update-medication-heading">Update medication</h2>
    <form class="update-medication-form" onSubmit={handleSubmit}>
        <div class="form-group">
            <label class="form-label">ID:</label>
            <input class="form-input" type="number" name="id" value={medicineData.id} onChange={handleChange} required />
        </div>
        <div class="form-group">
            <label class="form-label">Name:</label>
            <input class="form-input" type="text" name="name" value={medicineData.name} onChange={handleChange} required />
        </div>
        <div class="form-group">
            <label class="form-label">Price:</label>
            <input class="form-input" type="number" name="price" value={medicineData.price} onChange={handleChange} required />
        </div>
        <div class="form-group">
            <label class="form-label">Category:</label>
            <input class="form-input" type="text" name="category" value={medicineData.category} onChange={handleChange} required />
        </div>
        <button class="submit-button" type="submit">Update Medication</button>
    </form>
</div>

      );

      

}


export default UpdateMedicineForm;