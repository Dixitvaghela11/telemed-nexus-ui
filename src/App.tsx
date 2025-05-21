
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminDashboard />} /> {/* Placeholder - would be real pages in full app */}
          <Route path="/admin/appointments" element={<AdminDashboard />} />
          <Route path="/admin/care-plans" element={<AdminDashboard />} />
          <Route path="/admin/progress-logs" element={<AdminDashboard />} />
          <Route path="/admin/video-sessions" element={<AdminDashboard />} />
          <Route path="/admin/notifications" element={<AdminDashboard />} />
          <Route path="/admin/settings" element={<AdminDashboard />} />
          
          {/* Doctor Routes */}
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/doctor/appointments" element={<DoctorDashboard />} /> {/* Placeholder - would be real pages in full app */}
          <Route path="/doctor/care-plans" element={<DoctorDashboard />} />
          <Route path="/doctor/progress-logs" element={<DoctorDashboard />} />
          <Route path="/doctor/video-sessions" element={<DoctorDashboard />} />
          <Route path="/doctor/notifications" element={<DoctorDashboard />} />
          <Route path="/doctor/profile" element={<DoctorDashboard />} />
          
          {/* Patient Routes */}
          <Route path="/patient" element={<DoctorDashboard />} /> {/* Placeholder - would create real PatientDashboard */}
          <Route path="/patient/appointments" element={<DoctorDashboard />} />
          <Route path="/patient/care-plan" element={<DoctorDashboard />} />
          <Route path="/patient/progress-log" element={<DoctorDashboard />} />
          <Route path="/patient/profile" element={<DoctorDashboard />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
