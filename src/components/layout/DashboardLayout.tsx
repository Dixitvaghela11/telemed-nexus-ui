
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Bell, Settings, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  isActive: boolean;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'doctor' | 'patient';
}

const SidebarItem = ({ icon: Icon, label, to, isActive }: SidebarItemProps) => (
  <Link
    to={to}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
      isActive
        ? 'bg-healthcare-blue text-white'
        : 'hover:bg-healthcare-gray-light text-gray-700'
    }`}
  >
    <Icon size={20} className={isActive ? 'text-white' : 'text-gray-500'} />
    <span>{label}</span>
  </Link>
);

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Define navigation links based on role
  const getNavLinks = () => {
    if (role === 'admin') {
      return [
        { icon: User, label: 'Dashboard', to: '/admin' },
        { icon: User, label: 'User Management', to: '/admin/users' },
        { icon: Bell, label: 'Appointments', to: '/admin/appointments' },
        { icon: Settings, label: 'Care Plans', to: '/admin/care-plans' },
        { icon: User, label: 'Progress Logs', to: '/admin/progress-logs' },
        { icon: Bell, label: 'Video Sessions', to: '/admin/video-sessions' },
        { icon: Bell, label: 'Notifications', to: '/admin/notifications' },
        { icon: Settings, label: 'Settings', to: '/admin/settings' },
      ];
    } else if (role === 'doctor') {
      return [
        { icon: User, label: 'Dashboard', to: '/doctor' },
        { icon: Bell, label: 'Appointments', to: '/doctor/appointments' },
        { icon: Settings, label: 'Care Plans', to: '/doctor/care-plans' },
        { icon: User, label: 'Progress Logs', to: '/doctor/progress-logs' },
        { icon: Bell, label: 'Video Sessions', to: '/doctor/video-sessions' },
        { icon: Bell, label: 'Notifications', to: '/doctor/notifications' },
        { icon: Settings, label: 'Profile', to: '/doctor/profile' },
      ];
    } else {
      return [
        { icon: User, label: 'Dashboard', to: '/patient' },
        { icon: Bell, label: 'Appointments', to: '/patient/appointments' },
        { icon: Settings, label: 'Care Plan', to: '/patient/care-plan' },
        { icon: Bell, label: 'Progress Log', to: '/patient/progress-log' },
        { icon: Settings, label: 'Profile', to: '/patient/profile' },
      ];
    }
  };

  const navLinks = getNavLinks();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-healthcare-gray-light">
      {/* Sidebar for desktop */}
      <aside
        className={`bg-white shadow-md z-30 ${
          isMobile
            ? `fixed inset-y-0 left-0 transform ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } transition-transform duration-300 ease-in-out w-64`
            : 'w-64'
        }`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-healthcare-blue-dark flex items-center justify-center text-white font-bold">
              T
            </div>
            <span className="ml-2 font-semibold text-gray-800">TeleMed Nexus</span>
          </div>
          {isMobile && (
            <button onClick={toggleSidebar} className="text-gray-500">
              <X size={20} />
            </button>
          )}
        </div>
        <nav className="p-4 space-y-1">
          {navLinks.map((item) => (
            <SidebarItem
              key={item.to}
              icon={item.icon}
              label={item.label}
              to={item.to}
              isActive={location.pathname === item.to}
            />
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <header className="bg-white shadow-sm z-20">
          <div className="px-4 py-3 flex items-center justify-between">
            {isMobile && (
              <button onClick={toggleSidebar} className="text-gray-500">
                <Menu size={24} />
              </button>
            )}
            
            <h1 className={`text-xl font-semibold text-gray-800 ${isMobile ? 'ml-4' : 'ml-0'}`}>
              {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
            </h1>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell size={20} className="text-gray-600" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                    <div className="h-9 w-9 rounded-full bg-healthcare-blue-light flex items-center justify-center text-healthcare-blue-dark font-medium">
                      {role === 'admin' ? 'A' : role === 'doctor' ? 'D' : 'P'}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/login" className="w-full">Log out</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 bg-healthcare-gray-light">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
