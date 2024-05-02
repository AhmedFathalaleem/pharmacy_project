import React, { useState, useEffect } from "react";
import axios from "axios";




function UpdateCategoryForm(){

    const [CategoryData, setCategoryData] = useState({
        id:'',
        fName:'',
        lName:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryData({ ...CategoryData, [name]: value });
      };

      const getCategory = async () =>{
        try{
            const response = await axios.get('http://localhost:6001/category/GetCategories');
            setCategoryData(response.data);
        }catch(error){
            console.error("Error fetching category", error);
        }
    };

    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:6001/category/UpdateCategory`, CategoryData);
          getCategory();
        } catch (error) {
          console.error('Error updating category:', error);
        }
      };


      return (
    <div className="update-category-container">
        <div className="update-category-inner">
            <h2 className="update-category-heading">Update Category</h2>
            <form className="update-category-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">ID:</label>
                    <input className="form-input" type="number" name="id" value={CategoryData.id} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label className="form-label">Category name:</label>
                    <input className="form-input" type="text" name="name" value={CategoryData.name} onChange={handleChange} required />
                </div>
                <button className="submit-button" type="submit">Update category</button>
            </form>
        </div>
    </div>
    

      );

      

}


export default UpdateCategoryForm;