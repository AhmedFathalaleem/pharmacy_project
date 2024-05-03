import PatientsTable from "../components/PatientsTable";
import AddPatientForm from "../components/AddPatientForm";
import UpdatePatientForm from "../components/UpdatePatientForm";

function Patients(){
    return(
    <div className="container">
        
        
        <PatientsTable />
        <div className="update-and-add-container">
            <UpdatePatientForm />
            <AddPatientForm />
        </div>
    </div>
    );
    
}

export default Patients;