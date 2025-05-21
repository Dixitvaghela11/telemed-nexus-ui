
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Video, Users, CheckCircle, XCircle } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

const Appointments = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  // Sample appointment data for doctor
  const appointments = [
    { 
      id: 1, 
      patient: 'Alice Brown', 
      date: '2025-05-22',
      time: '09:00 AM',
      type: 'Video',
      status: 'Upcoming',
    },
    { 
      id: 2, 
      patient: 'Robert Davis', 
      date: '2025-05-22',
      time: '10:30 AM',
      type: 'Video',
      status: 'Upcoming',
    },
    { 
      id: 3, 
      patient: 'Mary Wilson', 
      date: '2025-05-21',
      time: '02:15 PM',
      type: 'Video',
      status: 'Completed',
    },
    { 
      id: 4, 
      patient: 'James Martin', 
      date: '2025-05-21',
      time: '11:00 AM',
      type: 'Video',
      status: 'Cancelled',
    },
    { 
      id: 5, 
      patient: 'Patricia Miller', 
      date: '2025-05-23',
      time: '03:45 PM',
      type: 'Video',
      status: 'Upcoming',
    },
  ];

  const handleJoinMeeting = (appointmentId: number) => {
    toast({
      title: "Joining video consultation",
      description: `Connecting to appointment #${appointmentId}...`,
    });
  };
  
  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout role="doctor">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Appointments</h1>
        <p className="text-gray-600">Manage your scheduled consultations</p>
      </div>
      
      <div className="mb-6 flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar size={16} />
            All
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Upcoming
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Completed
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Cancelled
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>My Appointments</CardTitle>
          <CardDescription>View and manage your patient consultations</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead className={isMobile ? "hidden" : ""}>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead className={isMobile ? "hidden" : ""}>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell className="font-medium">{appointment.patient}</TableCell>
                  <TableCell className={isMobile ? "hidden" : ""}>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell className={isMobile ? "hidden" : ""}>
                    <div className="flex items-center">
                      <Video size={16} className="mr-1" />
                      {appointment.type}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(appointment.status)}`}>
                      {appointment.status}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      {appointment.status === 'Upcoming' && (
                        <Button 
                          variant="default" 
                          size="sm"
                          onClick={() => handleJoinMeeting(appointment.id)}
                          className="flex items-center gap-1"
                        >
                          <Video size={14} />
                          Join
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Appointments;
