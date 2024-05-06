import React, { useState } from 'react';
import axios from 'axios';

const AddMedicineForm = () => {
  const [medicineData, setMedicineData] = useState({
    id: '',
    name: '',
    price: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicineData({ ...medicineData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6001/meds/AddMedicine', medicineData);
      console.log('Medicine added:', response.data);
      
      //RELOAD THE TABLE HERE

    } catch (error) {
      console.error('Error adding medicine:', error);
    }
  };

  return (
    <div className="add-medicine-container">
    <h2 className="add-medicine-heading">Add medication</h2>
    <form className="add-medicine-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
            <label className="form-label">Name:</label>
            <input className="form-input" type="text" name="name" value={medicineData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label className="form-label">Price:</label>
            <input className="form-input" type="number" name="price" value={medicineData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label className="form-label">Category:</label>
            <input className="form-input" type="text" name="category" value={medicineData.category} onChange={handleChange} required />
        </div>
        <button className="submit-button" type="submit">Add Medicine</button>
    </form>
</div>

  );
};

export default AddMedicineForm;
