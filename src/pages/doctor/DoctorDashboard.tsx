
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Calendar, Video } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const DoctorDashboard = () => {
  const { toast } = useToast();

  // Mock appointments data
  const todayAppointments = [
    { id: 1, time: '09:00 AM', patient: 'John Smith', type: 'Follow-up', status: 'upcoming' },
    { id: 2, time: '10:30 AM', patient: 'Sarah Johnson', type: 'Initial Consultation', status: 'upcoming' },
    { id: 3, time: '01:00 PM', patient: 'Michael Brown', type: 'Follow-up', status: 'upcoming' },
  ];

  const upcomingAppointments = [
    { id: 4, date: 'Tomorrow', time: '11:00 AM', patient: 'Emma Wilson', type: 'Follow-up' },
    { id: 5, date: 'May 23', time: '02:30 PM', patient: 'Robert Davis', type: 'Initial Consultation' },
    { id: 6, date: 'May 24', time: '09:15 AM', patient: 'Jennifer White', type: 'Follow-up' },
    { id: 7, date: 'May 25', time: '03:45 PM', patient: 'David Miller', type: 'Initial Consultation' },
  ];

  // Mock care plans data
  const carePlans = [
    { id: 1, patient: 'John Smith', title: 'Post-Surgery Recovery', progress: 75, tasks: 12, completed: 9 },
    { id: 2, patient: 'Sarah Johnson', title: 'Diabetes Management', progress: 50, tasks: 8, completed: 4 },
    { id: 3, patient: 'Michael Brown', title: 'Hypertension Control', progress: 30, tasks: 10, completed: 3 },
  ];

  // Mock progress logs data
  const progressLogs = [
    { id: 1, patient: 'John Smith', lastUpdate: '2 hours ago', status: 'needs-review' },
    { id: 2, patient: 'Sarah Johnson', lastUpdate: '1 day ago', status: 'reviewed' },
    { id: 3, patient: 'Michael Brown', lastUpdate: '3 hours ago', status: 'needs-review' },
  ];

  const handleJoinMeeting = (appointmentId: number) => {
    toast({
      title: "Joining video consultation",
      description: `Connecting to appointment #${appointmentId}...`,
    });
  };

  const handleReviewLog = (logId: number) => {
    toast({
      title: "Opening progress log",
      description: `Loading patient log #${logId} for review...`,
    });
  };

  return (
    <DashboardLayout role="doctor">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Doctor Dashboard</h1>
        <p className="text-gray-600">Welcome back, Dr. Johnson!</p>
      </div>
      
      {/* Today's Appointments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Today's Appointments</CardTitle>
                <CardDescription>Your scheduled consultations for today</CardDescription>
              </div>
              <Calendar className="h-5 w-5 text-gray-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayAppointments.length === 0 ? (
                <p className="text-center py-8 text-gray-500">No appointments scheduled for today</p>
              ) : (
                todayAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg bg-white">
                    <div>
                      <p className="font-medium text-gray-800">{appointment.time} - {appointment.patient}</p>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="text-xs bg-healthcare-green-light text-healthcare-green-dark border-healthcare-green-light">
                          {appointment.type}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => handleJoinMeeting(appointment.id)}
                      className="flex items-center gap-2"
                    >
                      <Video className="h-4 w-4" />
                      Join
                    </Button>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
        
        {/* Upcoming Appointments */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Upcoming</CardTitle>
            <CardDescription>Your schedule this week</CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <ScrollArea className="h-[190px]">
              <div className="pr-4 pl-2 space-y-2">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-3 border rounded-lg">
                    <p className="text-sm font-medium text-gray-800">{appointment.patient}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">{appointment.date} • {appointment.time}</p>
                      <Badge variant="outline" className="text-xs">{appointment.type}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="outline" size="sm" className="w-full">
              View Full Schedule
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* Care Plans and Progress Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Patient Care Plans</CardTitle>
            <CardDescription>Active plans requiring monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {carePlans.map((plan) => (
                <div key={plan.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between mb-2">
                    <p className="font-medium text-gray-800">{plan.patient}</p>
                    <Badge variant={plan.progress >= 70 ? "default" : "outline"}>
                      {plan.progress}% Complete
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{plan.title}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-healthcare-blue h-2.5 rounded-full" 
                      style={{ width: `${plan.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{plan.completed} of {plan.tasks} tasks completed</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Progress Logs</CardTitle>
            <CardDescription>Patient updates requiring your review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {progressLogs.map((log) => (
                <div key={log.id} className="p-4 border rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{log.patient}</p>
                    <p className="text-xs text-gray-500">Updated {log.lastUpdate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {log.status === 'needs-review' && (
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                        Needs Review
                      </Badge>
                    )}
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleReviewLog(log.id)}
                    >
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Today's Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-healthcare-blue">{todayAppointments.length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Care Plans Active</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-healthcare-blue">{carePlans.length}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-healthcare-blue">
              {progressLogs.filter(log => log.status === 'needs-review').length}
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;
