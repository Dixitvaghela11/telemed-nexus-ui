
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Video, Calendar, Clock, User, Link as LinkIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const VideoSessions = () => {
  const isMobile = useIsMobile();
  
  // Sample video session data
  const videoSessions = [
    { 
      id: 1, 
      patient: 'Alice Brown', 
      doctor: 'Dr. Sarah Johnson',
      date: '2025-05-22',
      time: '09:00 AM',
      duration: '30 min',
      status: 'Upcoming',
      link: 'https://meet.telemednexus.com/s12345',
    },
    { 
      id: 2, 
      patient: 'Robert Davis', 
      doctor: 'Dr. Michael Chen',
      date: '2025-05-22',
      time: '10:30 AM',
      duration: '45 min',
      status: 'Upcoming',
      link: 'https://meet.telemednexus.com/s23456',
    },
    { 
      id: 3, 
      patient: 'Mary Wilson', 
      doctor: 'Dr. Emily Rodriguez',
      date: '2025-05-21',
      time: '02:15 PM',
      duration: '30 min',
      status: 'Completed',
      link: 'https://meet.telemednexus.com/s34567',
    },
    { 
      id: 4, 
      patient: 'James Martin', 
      doctor: 'Dr. Sarah Johnson',
      date: '2025-05-21',
      time: '11:00 AM',
      duration: '60 min',
      status: 'Cancelled',
      link: 'https://meet.telemednexus.com/s45678',
    },
    { 
      id: 5, 
      patient: 'Patricia Miller', 
      doctor: 'Dr. Michael Chen',
      date: '2025-05-23',
      time: '03:45 PM',
      duration: '30 min',
      status: 'Upcoming',
      link: 'https://meet.telemednexus.com/s56789',
    },
  ];
  
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      case 'In Progress':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout role="admin">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Video Sessions</h1>
        <p className="text-gray-600">Manage telehealth video consultations</p>
      </div>
      
      <div className="mb-6 flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="flex items-center gap-2">
            <Video size={16} />
            All Sessions
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Today
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            This Week
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Completed
          </Button>
        </div>
        
        <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
          <Video size={16} className="mr-2" />
          New Video Session
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Video Consultations</CardTitle>
          <CardDescription>Schedule and manage virtual appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead className={isMobile ? "hidden" : ""}>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead className={isMobile ? "hidden" : ""}>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {videoSessions.map((session) => (
                <TableRow key={session.id}>
                  <TableCell className="font-medium">{session.patient}</TableCell>
                  <TableCell>{session.doctor}</TableCell>
                  <TableCell className={isMobile ? "hidden" : ""}>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {session.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      {session.time}
                    </div>
                  </TableCell>
                  <TableCell className={isMobile ? "hidden" : ""}>{session.duration}</TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(session.status)}`}>
                      {session.status}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      {session.status === 'Upcoming' && (
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <LinkIcon size={14} />
                          Join
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">Details</Button>
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

export default VideoSessions;
