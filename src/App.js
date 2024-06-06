import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/adminLayout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Login from './pages/Auth/Login';
import NoPage from "./pages/nopage";
import MerchantCard from "./pages/MerchantCard";
import ResetPassword from './pages/Auth/ResetPassword';
import VerifyOTP from './pages/Auth/VerifyOTP';
import ChangePassword from './pages/Auth/ChangePassword';
import SignUp from './pages/Auth/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Login />} />
    <Route path="/signin" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/resetPassword" element={<ResetPassword />} />
    <Route path="/verifyOTP" element={<VerifyOTP />} />
    <Route path="/changePassword" element={<ChangePassword />} />

    

      <Route path="/" element={<AdminLayout />}>
        
        <Route path="dashboard" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="merchantCard" element={<MerchantCard />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
