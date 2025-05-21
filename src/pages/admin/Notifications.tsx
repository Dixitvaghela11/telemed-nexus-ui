
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, Clock, Check, X, Users, Send, Plus } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Notifications = () => {
  const isMobile = useIsMobile();
  
  // Sample notification data
  const notifications = [
    { 
      id: 1, 
      title: 'Appointment Reminder', 
      recipients: 'Alice Brown',
      recipientType: 'Patient',
      channel: 'Email, SMS',
      scheduledFor: '2025-05-22 08:00 AM',
      status: 'Scheduled',
    },
    { 
      id: 2, 
      title: 'New Care Plan Assigned', 
      recipients: 'Robert Davis',
      recipientType: 'Patient',
      channel: 'Email, Push',
      scheduledFor: '2025-05-21 10:00 AM',
      status: 'Sent',
    },
    { 
      id: 3, 
      title: 'Progress Log Reminder', 
      recipients: 'All Patients with Active Care Plans',
      recipientType: 'Multiple Patients',
      channel: 'SMS',
      scheduledFor: '2025-05-21 06:00 PM',
      status: 'Sent',
    },
    { 
      id: 4, 
      title: 'System Maintenance Notice', 
      recipients: 'All Users',
      recipientType: 'All Users',
      channel: 'Email',
      scheduledFor: '2025-05-20 09:00 PM',
      status: 'Sent',
    },
    { 
      id: 5, 
      title: 'Video Session Link', 
      recipients: 'Patricia Miller, Dr. Michael Chen',
      recipientType: 'Patient & Doctor',
      channel: 'Email, SMS',
      scheduledFor: '2025-05-23 03:15 PM',
      status: 'Scheduled',
    },
  ];
  
  // Sample notification templates
  const notificationTemplates = [
    { 
      id: 1, 
      name: 'Appointment Reminder', 
      description: 'Reminder for upcoming appointments',
      channels: 'Email, SMS, Push',
      variables: 'patient_name, doctor_name, appointment_date, appointment_time',
      lastUsed: '2025-05-21',
    },
    { 
      id: 2, 
      name: 'New Care Plan Assigned', 
      description: 'Notification when a new care plan is assigned to a patient',
      channels: 'Email, Push',
      variables: 'patient_name, care_plan_name, doctor_name',
      lastUsed: '2025-05-21',
    },
    { 
      id: 3, 
      name: 'Progress Log Reminder', 
      description: 'Daily reminder to submit progress logs',
      channels: 'SMS, Push',
      variables: 'patient_name, care_plan_name',
      lastUsed: '2025-05-21',
    },
    { 
      id: 4, 
      name: 'System Maintenance Notice', 
      description: 'Notice of scheduled system maintenance',
      channels: 'Email',
      variables: 'maintenance_start_time, maintenance_end_time, affected_services',
      lastUsed: '2025-05-20',
    },
  ];
  
  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'Sent':
        return 'bg-green-100 text-green-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout role="admin">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
        <p className="text-gray-600">Manage system notifications and messages</p>
      </div>
      
      <Tabs defaultValue="notifications" className="w-full">
        <TabsList>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>
        
        <TabsContent value="notifications" className="mt-6">
          <div className="mb-6 flex justify-between items-center flex-wrap gap-3">
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline" className="flex items-center gap-2">
                <Bell size={16} />
                All
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                Scheduled
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                Sent
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                Failed
              </Button>
            </div>
            
            <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
              <Send size={16} className="mr-2" />
              New Notification
            </Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>System notifications sent to users</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className={isMobile ? "hidden" : ""}>Recipients</TableHead>
                    <TableHead className={isMobile ? "hidden" : ""}>Channel</TableHead>
                    <TableHead>Scheduled For</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {notifications.map((notification) => (
                    <TableRow key={notification.id}>
                      <TableCell className="font-medium">{notification.title}</TableCell>
                      <TableCell className={isMobile ? "hidden" : ""}>
                        <div>
                          <div>{notification.recipients}</div>
                          <div className="text-xs text-gray-500">{notification.recipientType}</div>
                        </div>
                      </TableCell>
                      <TableCell className={isMobile ? "hidden" : ""}>{notification.channel}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2" />
                          {notification.scheduledFor}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(notification.status)}`}>
                          {notification.status}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {notification.status === 'Scheduled' ? (
                            <>
                              <Button variant="ghost" size="sm">Edit</Button>
                              <Button variant="ghost" size="sm" className="text-red-600">
                                <X size={16} />
                              </Button>
                            </>
                          ) : (
                            <Button variant="ghost" size="sm">View Details</Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="templates" className="mt-6">
          <div className="mb-6 flex justify-end">
            <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
              <Plus size={16} className="mr-2" />
              Create Template
            </Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Notification Templates</CardTitle>
              <CardDescription>Reusable templates for system notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className={isMobile ? "hidden" : ""}>Description</TableHead>
                    <TableHead className={isMobile ? "hidden" : ""}>Channels</TableHead>
                    <TableHead className={isMobile ? "hidden" : ""}>Variables</TableHead>
                    <TableHead>Last Used</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {notificationTemplates.map((template) => (
                    <TableRow key={template.id}>
                      <TableCell className="font-medium">{template.name}</TableCell>
                      <TableCell className={isMobile ? "hidden" : ""}>{template.description}</TableCell>
                      <TableCell className={isMobile ? "hidden" : ""}>{template.channels}</TableCell>
                      <TableCell className={isMobile ? "hidden" : ""}>
                        <div className="max-w-xs truncate">{template.variables}</div>
                      </TableCell>
                      <TableCell>{template.lastUsed}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">Use</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Notifications;
