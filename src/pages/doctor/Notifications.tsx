
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, Clock, Check, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const Notifications = () => {
  const { toast } = useToast();
  
  // Sample notifications data
  const allNotifications = [
    {
      id: 1,
      type: 'appointment',
      title: 'Upcoming Appointment',
      message: 'You have an appointment with Alice Brown at 09:00 AM tomorrow',
      time: '30 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'message',
      title: 'New Message',
      message: 'Robert Davis sent you a message regarding his medication',
      time: '2 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'progress',
      title: 'Progress Log Update',
      message: 'Mary Wilson submitted a new progress log for your review',
      time: '3 hours ago',
      read: true
    },
    {
      id: 4,
      type: 'system',
      title: 'System Notification',
      message: 'Your weekly schedule has been generated',
      time: '1 day ago',
      read: true
    },
    {
      id: 5,
      type: 'appointment',
      title: 'Appointment Cancelled',
      message: 'The appointment with James Martin at 11:00 AM was cancelled',
      time: '1 day ago',
      read: true
    },
  ];

  const unreadNotifications = allNotifications.filter(notification => !notification.read);

  const handleMarkAsRead = (notificationId: number) => {
    toast({
      title: "Notification marked as read",
      description: `Notification #${notificationId} has been marked as read.`,
    });
  };

  const handleViewNotification = (notificationId: number, type: string) => {
    toast({
      title: "Opening notification",
      description: `Navigating to ${type} details...`,
    });
  };

  const getNotificationIcon = (type: string) => {
    switch(type) {
      case 'appointment':
        return <Calendar className="h-5 w-5 text-healthcare-blue" />;
      case 'message':
        return <Bell className="h-5 w-5 text-healthcare-blue" />;
      case 'progress':
        return <User className="h-5 w-5 text-healthcare-blue" />;
      case 'system':
        return <Bell className="h-5 w-5 text-healthcare-blue" />;
      default:
        return <Bell className="h-5 w-5 text-healthcare-blue" />;
    }
  };

  return (
    <DashboardLayout role="doctor">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
        <p className="text-gray-600">Stay updated with important alerts</p>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">
            All
            <Badge className="ml-2 bg-gray-100 text-gray-800">{allNotifications.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="unread">
            Unread
            <Badge className="ml-2 bg-healthcare-blue text-white">{unreadNotifications.length}</Badge>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Notifications</CardTitle>
              <CardDescription>All your system notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {allNotifications.map((notification) => (
                  <div key={notification.id} className={`p-4 border rounded-lg ${!notification.read ? 'bg-blue-50' : ''}`}>
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{notification.title}</h3>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <div className="flex justify-between items-center mt-3">
                          <Badge variant="outline" className="text-xs">{notification.type}</Badge>
                          <div className="flex gap-2">
                            {!notification.read && (
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleMarkAsRead(notification.id)}
                              >
                                <Check className="h-4 w-4 mr-1" />
                                Mark as Read
                              </Button>
                            )}
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleViewNotification(notification.id, notification.type)}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="unread">
          <Card>
            <CardHeader>
              <CardTitle>Unread Notifications</CardTitle>
              <CardDescription>Notifications you haven't read yet</CardDescription>
            </CardHeader>
            <CardContent>
              {unreadNotifications.length === 0 ? (
                <div className="text-center py-8">
                  <Bell className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-gray-700">No unread notifications</h3>
                  <p className="text-gray-500">You're all caught up!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {unreadNotifications.map((notification) => (
                    <div key={notification.id} className="p-4 border rounded-lg bg-blue-50">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{notification.title}</h3>
                            <span className="text-xs text-gray-500">{notification.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <div className="flex justify-between items-center mt-3">
                            <Badge variant="outline" className="text-xs">{notification.type}</Badge>
                            <div className="flex gap-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleMarkAsRead(notification.id)}
                              >
                                <Check className="h-4 w-4 mr-1" />
                                Mark as Read
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => handleViewNotification(notification.id, notification.type)}
                              >
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Notifications;
