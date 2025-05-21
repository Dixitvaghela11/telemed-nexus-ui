
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, User, Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

const ProgressLogs = () => {
  const { toast } = useToast();
  
  // Sample progress logs data
  const progressLogs = [
    {
      id: 1,
      patient: 'John Smith',
      date: '2025-05-20',
      time: '09:30 AM',
      type: 'Patient Submission',
      status: 'Needs Review',
      excerpt: 'Blood pressure readings and daily medication report...'
    },
    {
      id: 2,
      patient: 'Sarah Johnson',
      date: '2025-05-19',
      time: '02:45 PM',
      type: 'Patient Submission',
      status: 'Reviewed',
      excerpt: 'Weekly glucose monitoring results and diet log...'
    },
    {
      id: 3,
      patient: 'Michael Brown',
      date: '2025-05-18',
      time: '11:15 AM',
      type: 'Doctor Note',
      status: 'Completed',
      excerpt: 'Patient reports improvement in symptoms after medication adjustment...'
    },
    {
      id: 4,
      patient: 'Emma Wilson',
      date: '2025-05-20',
      time: '10:00 AM',
      type: 'Patient Submission',
      status: 'Needs Review',
      excerpt: 'Daily exercise log and pain assessment scores...'
    },
  ];

  const handleReviewLog = (logId: number) => {
    toast({
      title: "Opening progress log",
      description: `Loading log #${logId} for review...`,
    });
  };

  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'Needs Review':
        return 'bg-amber-100 text-amber-800';
      case 'Reviewed':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout role="doctor">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Progress Logs</h1>
        <p className="text-gray-600">Track and review patient progress</p>
      </div>
      
      <div className="mb-6 flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="flex items-center gap-2">
            <User size={16} />
            All Patients
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Needs Review
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Reviewed
          </Button>
        </div>
        
        <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
          <FileText size={16} className="mr-2" />
          Add Progress Note
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Patient Progress Logs</CardTitle>
          <CardDescription>Review and respond to patient updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {progressLogs.map((log) => (
              <Card key={log.id} className="border shadow-sm">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{log.patient}</h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {log.date} at {log.time}
                      </div>
                    </div>
                    <Badge className={getStatusBadgeClass(log.status)}>
                      {log.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{log.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">{log.type}</Badge>
                    <div className="flex space-x-2">
                      {log.status === 'Needs Review' && (
                        <Button 
                          variant="default" 
                          size="sm"
                          onClick={() => handleReviewLog(log.id)}
                          className="flex items-center gap-1"
                        >
                          <Check size={14} />
                          Review
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleReviewLog(log.id)}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default ProgressLogs;
