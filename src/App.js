import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/adminLayout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Login from './pages/LoginPage';
import Register from "./pages/RegisterPage";
import NoPage from "./pages/nopage";
import MerchantCard from "./pages/MerchantCard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Register />} />

      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="merchantCard" element={<MerchantCard />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
