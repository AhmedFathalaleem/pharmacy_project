import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../components/styles.css"

function CategoriesTable(){

    const [Categories, setCategory] = useState([]);

    useEffect(function(){
        getCategories();
    }, []);

    const getCategories = async () =>{
        try{
            const response = await axios.get('http://localhost:6001/category/GetCategories');
            setCategory(response.data);
        }catch(error){
            console.error("Error fetching categories", error);
        }
    };

    const deleteCategory = async (id) =>{
        try{
            await axios.delete('http://localhost:6001/category/DeleteCategory/'+id);
            getCategories();
        }catch (error){
        console.error('Error deleting category', error);
        }
    };

    return (
        <div className="categories-container">
            <h2>Categories</h2>
            <table className="categories-table">
                <thead>
                    <tr>
                        <th className="category-id">ID</th>
                        <th className="category-name">Name</th>
                        <th className="category-action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Categories.map((category) =>(
                    <tr className="category-row" key={category.id}>
                        <td className="category-id">{category.id}</td>
                        <td className="category-name">{category.categoryName}</td>
                        <td className="category-action">
                        <button className="delete-button" onClick={()=>deleteCategory(category.id)}>Delete</button>
                        </td>
                    </tr>
            ))}
                </tbody>
            </table>
        </div>
    )

}

export default CategoriesTable;