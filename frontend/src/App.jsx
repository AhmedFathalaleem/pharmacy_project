import Categories from './pages/Categories';
import Patients from './pages/Patients';
import Medicines from './pages/Medicines';
import './App.css';
import Navbar from './components/Navbar';
import "./components/styles.css"
import { Route, Routes } from "react-router-dom";


function App() {


  
  return (
    <>
      <Navbar />
      <div className="container">
      <Routes>
        <Route path="/" element ={<Patients />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path='/Medicines' element={<Medicines />}/>
      </Routes>
      </div>
      
    </>
    
    
    
    
  );
  
}

export default App;
