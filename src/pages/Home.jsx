
import  "../pages/homeStyle.css"
import PatientsTable from "../components/PatientsTable";
import AddPatientForm from "../components/AddPatientForm";
import UpdatePatientForm from "../components/UpdatePatientForm";

function Home(){
    return(
    <div className="container">
        
        <h1>Home page</h1>
        <PatientsTable />
        <UpdatePatientForm />
        <AddPatientForm />
    </div>
    );
    
}

export default Home;