
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

const VideoSessions = () => {
  const { toast } = useToast();
  
  // Sample upcoming video sessions
  const upcomingSessions = [
    {
      id: 1,
      patient: 'Alice Brown',
      date: '2025-05-22',
      time: '09:00 AM',
      duration: '30 min',
      type: 'Follow-up',
      status: 'Scheduled'
    },
    {
      id: 2,
      patient: 'Robert Davis',
      date: '2025-05-22',
      time: '10:30 AM',
      duration: '45 min',
      type: 'Initial Consultation',
      status: 'Scheduled'
    },
    {
      id: 3,
      patient: 'Mary Wilson',
      date: 'Today',
      time: '02:15 PM',
      duration: '30 min',
      type: 'Follow-up',
      status: 'Starting Soon'
    },
  ];

  // Sample past video sessions
  const pastSessions = [
    {
      id: 4,
      patient: 'James Martin',
      date: '2025-05-19',
      time: '11:00 AM',
      duration: '30 min',
      type: 'Follow-up',
      status: 'Completed'
    },
    {
      id: 5,
      patient: 'Patricia Miller',
      date: '2025-05-18',
      time: '03:45 PM',
      duration: '45 min',
      type: 'Initial Consultation',
      status: 'Completed'
    },
  ];

  const handleJoinSession = (sessionId: number) => {
    toast({
      title: "Joining video session",
      description: `Setting up video connection for session #${sessionId}...`,
    });
  };

  const handleViewRecording = (sessionId: number) => {
    toast({
      title: "Opening session recording",
      description: `Loading recording for session #${sessionId}...`,
    });
  };

  return (
    <DashboardLayout role="doctor">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Video Sessions</h1>
        <p className="text-gray-600">Manage your telehealth video consultations</p>
      </div>
      
      {/* Upcoming Sessions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
          <CardDescription>Your scheduled video consultations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="flex justify-between items-center p-4 border rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-healthcare-blue-light h-10 w-10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-healthcare-blue" />
                    </div>
                    <div>
                      <p className="font-medium">{session.patient}</p>
                      <p className="text-xs text-gray-500">{session.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{session.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{session.time} • {session.duration}</span>
                  </div>
                  
                  <Badge className={session.status === 'Starting Soon' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}>
                    {session.status}
                  </Badge>
                </div>
                
                <Button 
                  onClick={() => handleJoinSession(session.id)}
                  className="flex items-center gap-2"
                >
                  <Video className="h-4 w-4" />
                  Join Session
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Past Sessions */}
      <Card>
        <CardHeader>
          <CardTitle>Past Sessions</CardTitle>
          <CardDescription>Your completed video consultations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pastSessions.map((session) => (
              <div key={session.id} className="flex justify-between items-center p-4 border rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="font-medium">{session.patient}</p>
                      <p className="text-xs text-gray-500">{session.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{session.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{session.time} • {session.duration}</span>
                  </div>
                  
                  <Badge variant="outline">Completed</Badge>
                </div>
                
                <Button 
                  variant="outline"
                  onClick={() => handleViewRecording(session.id)}
                  className="flex items-center gap-2"
                >
                  <Video className="h-4 w-4" />
                  View Recording
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default VideoSessions;
