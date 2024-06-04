import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/adminLayout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Login from './pages/Auth/LoginPage';
import Register from "./pages/RegisterPage";
import NoPage from "./pages/nopage";
import MerchantCard from "./pages/MerchantCard";
import ManageCustomer from "./pages/ManageCustomer";
import ResetPassword from './pages/Auth/ResetPassword';
import VerifyOTP from './pages/Auth/VerifyOTP';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Register />} />
    <Route path="/resetPassword" element={<ResetPassword />} />
    <Route path="/verifyOTP" element={<VerifyOTP />} />

    

      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="merchantCard" element={<MerchantCard />} />
        <Route path="/customers/manageCustomer" element={<ManageCustomer />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
