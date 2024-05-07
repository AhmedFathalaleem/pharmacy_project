import React, { useState } from 'react';
import axios from 'axios';

const RequestHistoryForm = (props) => {

    const [CategoryData, setCategoryData] = useState({
        id: "",
        medicineId: "",
        userId: "",
        isApproved: ""
    });

    const [filteredData, setFilteredData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryData({ ...CategoryData, [name]: value });
    };

    const { userId } = props;

    const filterById = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.get('http://localhost:17088/Request/' + CategoryData.userId); // Fetch data based on userId
            console.log('Filtered data:', response.data);
            setFilteredData(response.data); // Set filtered data
        } catch (error) {
            console.error('Error filtering data', error);
        }
    };

    return (
        <div className="add-category-container">
            <div className="add-category-inner">
                <form className="add-category-form" onSubmit={filterById}>
                    <div className="form-group">
                        <label className="form-label">Category ID:</label>
                        <input className="form-input" type="number" name="userId" value={CategoryData.userId} onChange={handleChange} required />
                    </div>
                    <button className="submit-button" type="submit">Filter by ID</button>
                </form>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Medicine ID</th>
                            <th>Category ID</th>
                            <th>Is Approved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.medicineId}</td>
                                <td>{item.userId}</td>
                                <td>{item.isApproved ? 'Yes' : 'No'}</td> 
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestHistoryForm;
