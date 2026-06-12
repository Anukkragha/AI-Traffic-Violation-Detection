import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import CitizenLogin from "./pages/CitizenLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CitizenDashboard from "./pages/CitizenDashboard";
import UploadViolation from "./pages/UploadViolation";
import ViewViolations from "./pages/ViewViolations";
import ViewFines from "./pages/ViewFines";
import ViewDisputes from "./pages/ViewDisputes";
import PayFine from "./pages/PayFine";
import RaiseDispute from "./pages/RaiseDispute";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/citizen-login" element={<CitizenLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
        <Route path="/upload-violation" element={<UploadViolation />} />
        <Route path="/violations" element={<ViewViolations />} />
        <Route path="/fines" element={<ViewFines />} />
        <Route path="/disputes" element={<ViewDisputes />} />
        <Route path="/pay-fine" element={<PayFine />} />
        <Route path="/raise-dispute" element={<RaiseDispute />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;