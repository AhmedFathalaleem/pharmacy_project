import React, { useState } from "react";
import axios from "axios";

function UpdatePatientForm() {
    const [PatientData, setPatientData] = useState({
        id: '',
        Name: '',
        UserId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientData({ ...PatientData, [name]: value });
    };

    const handleSubmit = async (id) => {// Prevent default form submission
        try {
            await axios.put(`http://localhost:17088/Patient/${PatientData.id}`, PatientData);
        } catch (error) {
            console.error('Error updating patient:', error);
        }
    };

    return (
        <div className="update-patient-container-wrap">
            <div className="update-patient-container">
                <h2 className="update-patient-heading">Update patient</h2>
                <form className="update-patient-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">ID:</label>
                        <input className="form-input" type="number" name="id" value={PatientData.id} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">First Name:</label>
                        <input className="form-input" type="text" name="Name" value={PatientData.Name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">User ID:</label>
                        <input className="form-input" type="number" name="UserId" value={PatientData.UserId} onChange={handleChange} required />
                    </div>
                    <button className="submit-button" type="submit">Update patient</button>
                </form>
            </div>
        </div>
    );
}

export default UpdatePatientForm;
