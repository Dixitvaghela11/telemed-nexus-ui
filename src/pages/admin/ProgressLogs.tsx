
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { FileText, Clock, User, CheckCircle, Search } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ProgressLogs = () => {
  const isMobile = useIsMobile();
  
  // Sample progress log data
  const progressLogs = [
    { 
      id: 1, 
      patient: 'Alice Brown', 
      carePlan: 'Post-Surgery Recovery',
      submittedOn: '2025-05-21 09:15 AM',
      status: 'Unreviewed',
      painLevel: 3,
      completedTasks: '4/5',
    },
    { 
      id: 2, 
      patient: 'Robert Davis', 
      carePlan: 'Chronic Pain Management',
      submittedOn: '2025-05-21 10:30 AM',
      status: 'Reviewed',
      painLevel: 5,
      completedTasks: '3/4',
    },
    { 
      id: 3, 
      patient: 'Mary Wilson', 
      carePlan: 'Diabetes Monitoring',
      submittedOn: '2025-05-20 02:15 PM',
      status: 'Flagged',
      painLevel: 1,
      completedTasks: '5/5',
    },
    { 
      id: 4, 
      patient: 'James Martin', 
      carePlan: 'Mental Health Check-in',
      submittedOn: '2025-05-20 11:45 AM',
      status: 'Reviewed',
      painLevel: 2,
      completedTasks: '6/7',
    },
    { 
      id: 5, 
      patient: 'Patricia Miller', 
      carePlan: 'Cardiac Rehabilitation',
      submittedOn: '2025-05-19 03:30 PM',
      status: 'Unreviewed',
      painLevel: 4,
      completedTasks: '4/5',
    },
  ];
  
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'Unreviewed':
        return 'bg-yellow-100 text-yellow-800';
      case 'Reviewed':
        return 'bg-green-100 text-green-800';
      case 'Flagged':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPainLevelClass = (level) => {
    if (level <= 3) return 'bg-green-100 text-green-800';
    if (level <= 6) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <DashboardLayout role="admin">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Progress Logs</h1>
        <p className="text-gray-600">Monitor patient recovery and treatment progress</p>
      </div>
      
      <div className="mb-6 flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="flex items-center gap-2">
            <FileText size={16} />
            All Logs
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Unreviewed
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Flagged
          </Button>
        </div>
        
        <div className="flex items-center bg-white border rounded-md px-3 py-2">
          <Search size={16} className="text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search logs..." 
            className="border-none outline-none bg-transparent"
          />
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Patient Progress Logs</CardTitle>
          <CardDescription>Daily and weekly patient-reported outcomes</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead className={isMobile ? "hidden" : ""}>Care Plan</TableHead>
                <TableHead className={isMobile ? "hidden" : ""}>Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Pain Level</TableHead>
                <TableHead className={isMobile ? "hidden" : ""}>Tasks</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {progressLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.patient}</TableCell>
                  <TableCell className={isMobile ? "hidden" : ""}>{log.carePlan}</TableCell>
                  <TableCell className={isMobile ? "hidden" : ""}>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      {log.submittedOn}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(log.status)}`}>
                      {log.status}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPainLevelClass(log.painLevel)}`}>
                      {log.painLevel}/10
                    </div>
                  </TableCell>
                  <TableCell className={isMobile ? "hidden" : ""}>
                    <div className="flex items-center">
                      <CheckCircle size={16} className="mr-2 text-green-600" />
                      {log.completedTasks}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">View Details</Button>
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

export default ProgressLogs;
