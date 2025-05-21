
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';

const AdminDashboard = () => {
  const isMobile = useIsMobile();
  
  // Sample data for charts
  const consultationData = [
    { name: 'Mon', completed: 12, pending: 5, total: 17 },
    { name: 'Tue', completed: 18, pending: 7, total: 25 },
    { name: 'Wed', completed: 15, pending: 10, total: 25 },
    { name: 'Thu', completed: 25, pending: 8, total: 33 },
    { name: 'Fri', completed: 22, pending: 6, total: 28 },
    { name: 'Sat', completed: 8, pending: 3, total: 11 },
    { name: 'Sun', completed: 5, pending: 2, total: 7 },
  ];
  
  const statsData = {
    totalAppointments: 146,
    totalDoctors: 32,
    totalPatients: 587,
    completionRate: 78,
  };

  return (
    <DashboardLayout role="admin">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your system.</p>
      </div>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="dashboard-stat-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-lg">Total Appointments</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="stat-value">{statsData.totalAppointments}</p>
            <p className="stat-label">This month</p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stat-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-lg">Doctors</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="stat-value">{statsData.totalDoctors}</p>
            <p className="stat-label">Active practitioners</p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stat-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-lg">Patients</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="stat-value">{statsData.totalPatients}</p>
            <p className="stat-label">Registered users</p>
          </CardContent>
        </Card>
        
        <Card className="dashboard-stat-card">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-lg">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="stat-value">{statsData.completionRate}%</p>
            <p className="stat-label">Consultations completed</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Main charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Consultation Overview</CardTitle>
            <CardDescription>Weekly consultation statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={consultationData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#33C3F0" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#33C3F0" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorPending" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F2FCE2" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#F2FCE2" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="completed"
                    name="Completed"
                    stroke="#33C3F0"
                    fillOpacity={1}
                    fill="url(#colorCompleted)"
                  />
                  <Area
                    type="monotone"
                    dataKey="pending"
                    name="Pending"
                    stroke="#F2FCE2"
                    fillOpacity={1}
                    fill="url(#colorPending)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Consultations by Day</CardTitle>
            <CardDescription>Distribution across the week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={consultationData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" name="Total Consultations" fill="#33C3F0" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: '2 minutes ago', event: 'Dr. Smith completed a telehealth consultation' },
                { time: '15 minutes ago', event: 'New patient registered: John Doe' },
                { time: '1 hour ago', event: 'Care plan updated for patient #12345' },
                { time: '3 hours ago', event: 'System update completed successfully' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
                  <div className="h-2 w-2 mt-2 rounded-full bg-healthcare-blue mr-3"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{activity.event}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
