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
    <div>
      <h2>Add Medicine</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="number" name="id" value={medicineData.id} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={medicineData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={medicineData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={medicineData.category} onChange={handleChange} required />
        </div>
        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
};

export default AddMedicineForm;
