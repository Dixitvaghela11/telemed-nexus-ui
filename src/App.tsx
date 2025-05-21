
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import Appointments from "./pages/admin/Appointments";
import CarePlans from "./pages/admin/CarePlans";
import ProgressLogs from "./pages/admin/ProgressLogs";
import VideoSessions from "./pages/admin/VideoSessions";
import Notifications from "./pages/admin/Notifications";
import Settings from "./pages/admin/Settings";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorAppointments from "./pages/doctor/Appointments";
import DoctorCarePlans from "./pages/doctor/CarePlans";
import DoctorProgressLogs from "./pages/doctor/ProgressLogs";
import DoctorVideoSessions from "./pages/doctor/VideoSessions";
import DoctorNotifications from "./pages/doctor/Notifications";
import DoctorProfile from "./pages/doctor/Profile";
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
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/appointments" element={<Appointments />} />
          <Route path="/admin/care-plans" element={<CarePlans />} />
          <Route path="/admin/progress-logs" element={<ProgressLogs />} />
          <Route path="/admin/video-sessions" element={<VideoSessions />} />
          <Route path="/admin/notifications" element={<Notifications />} />
          <Route path="/admin/settings" element={<Settings />} />
          
          {/* Doctor Routes */}
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/doctor/appointments" element={<DoctorAppointments />} />
          <Route path="/doctor/care-plans" element={<DoctorCarePlans />} />
          <Route path="/doctor/progress-logs" element={<DoctorProgressLogs />} />
          <Route path="/doctor/video-sessions" element={<DoctorVideoSessions />} />
          <Route path="/doctor/notifications" element={<DoctorNotifications />} />
          <Route path="/doctor/profile" element={<DoctorProfile />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
