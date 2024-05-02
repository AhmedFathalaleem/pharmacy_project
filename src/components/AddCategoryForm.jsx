import React, { useState } from 'react';
import axios from 'axios';

const AddCategoryForm = () =>{

    const [CategoryData, setCategoryData] = useState({
        id: '',
        categoryName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryData({ ...CategoryData, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:6001/category/AddCategory', CategoryData);
            console.log('Category added', response.data);
            
            //RELOAD THE TABLE HERE

        }catch(error){
            console.error('Error adding category', error);
        }
    };

        return (
            <div className="add-category-container">
                <div className="add-category-inner">
                    <h2 className="add-category-heading">Add Category</h2>
                    <form className="add-category-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">ID:</label>
                            <input className="form-input" type="number" name="id" value={CategoryData.id} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Name:</label>
                            <input className="form-input" type="text" name="categoryName" value={CategoryData.categoryName} onChange={handleChange} required />
                        </div>
                        <button className="submit-button" type="submit">Add Category</button>
                    </form>
                </div>
            </div>
        
        );
      };



export default AddCategoryForm;

