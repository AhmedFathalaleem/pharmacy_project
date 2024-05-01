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
    <div class="add-medicine-container">
    <h2 class="add-medicine-heading">Add medication</h2>
    <form class="add-medicine-form" onSubmit={handleSubmit}>
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
        <button class="submit-button" type="submit">Add Medicine</button>
    </form>
</div>

  );
};

export default AddMedicineForm;
