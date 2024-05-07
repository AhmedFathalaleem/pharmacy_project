import Categories from './pages/Categories';
import Patients from './pages/Patients';
import Medicines from './pages/Medicines';
import './App.css';
import Navbar from './components/Navbar';
import "./components/styles.css"
import { Route, Routes } from "react-router-dom";
import LoginAndRegister from './pages/LoginAndRegister';
import RequestMed from './pages/RequestMed';
import MedRequestsPage from './pages/MedRequestsPage';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginAndRegister />} />
        <Route path="/Request" element={<RequestMed />} />
        <Route path="/Patient" element={
            <>
              <Navbar />
              <Patients />
            </>
          }
        />
        <Route path="/Categories" element={
            <>
              <Navbar />
              <Categories />
            </>
          }
        />

        <Route path="/MedRequestsPage" element={
            <>
              <Navbar />
              <MedRequestsPage />
            </>
          }
        />

        <Route path="/Medicines" element={
            <>
              <Navbar />
              <Medicines />
            </>
          }
        />
      </Routes>
    </>
  );
}




export default App;
