
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings as SettingsIcon, Users, Calendar, Bell, Mail, Lock, Server, Video } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const Settings = () => {
  const isMobile = useIsMobile();
  
  return (
    <DashboardLayout role="admin">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
        <p className="text-gray-600">Configure system settings and preferences</p>
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="users">User Roles</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="mt-6">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic system configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="system-name" className="text-sm font-medium">System Name</label>
                    <input 
                      id="system-name" 
                      type="text" 
                      defaultValue="TeleMed Nexus"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium">Contact Email</label>
                    <input 
                      id="contact-email" 
                      type="email" 
                      defaultValue="support@telemednexus.com"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="timezone" className="text-sm font-medium">Default Timezone</label>
                    <select 
                      id="timezone" 
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                    >
                      <option value="UTC">UTC (Coordinated Universal Time)</option>
                      <option value="EST" selected>EST (Eastern Standard Time)</option>
                      <option value="CST">CST (Central Standard Time)</option>
                      <option value="MST">MST (Mountain Standard Time)</option>
                      <option value="PST">PST (Pacific Standard Time)</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="date-format" className="text-sm font-medium">Date Format</label>
                    <select 
                      id="date-format" 
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                    >
                      <option value="MM/DD/YYYY" selected>MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">System Logo</label>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-md bg-healthcare-blue-light flex items-center justify-center text-healthcare-blue-dark font-bold text-lg">
                      TN
                    </div>
                    <Button variant="outline">Upload New Logo</Button>
                  </div>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Appointment Settings</CardTitle>
              <CardDescription>Configure appointment durations and availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="default-duration" className="text-sm font-medium">Default Appointment Duration</label>
                    <select 
                      id="default-duration" 
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                    >
                      <option value="15">15 minutes</option>
                      <option value="30" selected>30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60">60 minutes</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="buffer-time" className="text-sm font-medium">Buffer Time Between Appointments</label>
                    <select 
                      id="buffer-time" 
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                    >
                      <option value="0">None</option>
                      <option value="5" selected>5 minutes</option>
                      <option value="10">10 minutes</option>
                      <option value="15">15 minutes</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Business Hours</label>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="monday" className="rounded border-gray-300" checked />
                      <label htmlFor="monday">Monday</label>
                      <input 
                        type="time" 
                        defaultValue="09:00"
                        className="ml-auto rounded-md border border-gray-300 px-3 py-1 focus:border-healthcare-blue focus:outline-none"
                      />
                      <span>to</span>
                      <input 
                        type="time" 
                        defaultValue="17:00"
                        className="rounded-md border border-gray-300 px-3 py-1 focus:border-healthcare-blue focus:outline-none"
                      />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="tuesday" className="rounded border-gray-300" checked />
                      <label htmlFor="tuesday">Tuesday</label>
                      <input 
                        type="time" 
                        defaultValue="09:00"
                        className="ml-auto rounded-md border border-gray-300 px-3 py-1 focus:border-healthcare-blue focus:outline-none"
                      />
                      <span>to</span>
                      <input 
                        type="time" 
                        defaultValue="17:00"
                        className="rounded-md border border-gray-300 px-3 py-1 focus:border-healthcare-blue focus:outline-none"
                      />
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="wednesday" className="rounded border-gray-300" checked />
                      <label htmlFor="wednesday">Wednesday</label>
                      <input 
                        type="time" 
                        defaultValue="09:00"
                        className="ml-auto rounded-md border border-gray-300 px-3 py-1 focus:border-healthcare-blue focus:outline-none"
                      />
                      <span>to</span>
                      <input 
                        type="time" 
                        defaultValue="17:00"
                        className="rounded-md border border-gray-300 px-3 py-1 focus:border-healthcare-blue focus:outline-none"
                      />
                    </div>
                    
                    {/* More days would go here */}
                  </div>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>User Roles & Permissions</CardTitle>
              <CardDescription>Define system roles and access levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Admin Role</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Access Permissions</h4>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input type="checkbox" id="admin-users" className="rounded border-gray-300" checked disabled />
                              <label htmlFor="admin-users" className="ml-2 text-sm">User Management</label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="admin-appointments" className="rounded border-gray-300" checked />
                              <label htmlFor="admin-appointments" className="ml-2 text-sm">Appointments</label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="admin-care-plans" className="rounded border-gray-300" checked />
                              <label htmlFor="admin-care-plans" className="ml-2 text-sm">Care Plans</label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="admin-settings" className="rounded border-gray-300" checked />
                              <label htmlFor="admin-settings" className="ml-2 text-sm">System Settings</label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="admin-video" className="rounded border-gray-300" checked />
                              <label htmlFor="admin-video" className="ml-2 text-sm">Video Sessions</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Doctor Role</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Access Permissions</h4>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input type="checkbox" id="doctor-appointments" className="rounded border-gray-300" checked />
                              <label htmlFor="doctor-appointments" className="ml-2 text-sm">Own Appointments</label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="doctor-care-plans" className="rounded border-gray-300" checked />
                              <label htmlFor="doctor-care-plans" className="ml-2 text-sm">Assign Care Plans</label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="doctor-progress" className="rounded border-gray-300" checked />
                              <label htmlFor="doctor-progress" className="ml-2 text-sm">View Patient Progress</label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="doctor-video" className="rounded border-gray-300" checked />
                              <label htmlFor="doctor-video" className="ml-2 text-sm">Video Consultations</label>
                            </div>
                            <div className="flex items-center">
                              <input type="checkbox" id="doctor-settings" className="rounded border-gray-300" checked disabled />
                              <label htmlFor="doctor-settings" className="ml-2 text-sm">Own Profile Settings</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
                    Save Permissions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure system notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-md font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Appointment Reminders</div>
                        <div className="text-sm text-gray-500">Send email reminders for upcoming appointments</div>
                      </div>
                      <div className="flex items-center h-6">
                        <input type="checkbox" id="email-appointment" className="rounded border-gray-300" checked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Care Plan Updates</div>
                        <div className="text-sm text-gray-500">Send emails when care plans are assigned or modified</div>
                      </div>
                      <div className="flex items-center h-6">
                        <input type="checkbox" id="email-care-plan" className="rounded border-gray-300" checked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">System Announcements</div>
                        <div className="text-sm text-gray-500">Send emails for important system announcements</div>
                      </div>
                      <div className="flex items-center h-6">
                        <input type="checkbox" id="email-system" className="rounded border-gray-300" checked />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-md font-medium">SMS Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Appointment Reminders</div>
                        <div className="text-sm text-gray-500">Send SMS reminders for upcoming appointments</div>
                      </div>
                      <div className="flex items-center h-6">
                        <input type="checkbox" id="sms-appointment" className="rounded border-gray-300" checked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Progress Log Reminders</div>
                        <div className="text-sm text-gray-500">Send SMS reminders to submit progress logs</div>
                      </div>
                      <div className="flex items-center h-6">
                        <input type="checkbox" id="sms-progress" className="rounded border-gray-300" checked />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-md font-medium">Notification Timing</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="appointment-reminder-time" className="text-sm font-medium">
                        Send appointment reminders
                      </label>
                      <select 
                        id="appointment-reminder-time" 
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                      >
                        <option value="1h">1 hour before</option>
                        <option value="2h">2 hours before</option>
                        <option value="12h">12 hours before</option>
                        <option value="24h" selected>24 hours before</option>
                        <option value="48h">48 hours before</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
                    Save Notification Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure system security options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-md font-medium">Password Policy</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Minimum Password Length</div>
                      </div>
                      <div className="w-24">
                        <input 
                          type="number" 
                          min="8"
                          max="30"
                          defaultValue="12"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Require Special Characters</div>
                      </div>
                      <div className="flex items-center h-6">
                        <input type="checkbox" id="special-chars" className="rounded border-gray-300" checked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Require Numbers</div>
                      </div>
                      <div className="flex items-center h-6">
                        <input type="checkbox" id="require-numbers" className="rounded border-gray-300" checked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Require Mixed Case</div>
                      </div>
                      <div className="flex items-center h-6">
                        <input type="checkbox" id="mixed-case" className="rounded border-gray-300" checked />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-md font-medium">Account Security</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Session Timeout</div>
                        <div className="text-sm text-gray-500">Automatically log out inactive users</div>
                      </div>
                      <div className="w-48">
                        <select 
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                        >
                          <option value="15">15 minutes</option>
                          <option value="30" selected>30 minutes</option>
                          <option value="60">1 hour</option>
                          <option value="120">2 hours</option>
                          <option value="0">Never</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-sm text-gray-500">Require 2FA for all admin users</div>
                      </div>
                      <div className="flex items-center h-6">
                        <input type="checkbox" id="admin-2fa" className="rounded border-gray-300" checked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Login Attempts</div>
                        <div className="text-sm text-gray-500">Maximum failed login attempts before lockout</div>
                      </div>
                      <div className="w-24">
                        <input 
                          type="number" 
                          min="1"
                          max="10"
                          defaultValue="5"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
                    Save Security Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>System Integrations</CardTitle>
              <CardDescription>Connect with third-party services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center text-blue-600">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium">Email Service Provider</h3>
                        <p className="text-sm text-gray-500">Configure email delivery service</p>
                      </div>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Connected
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="email-provider" className="text-sm font-medium">Provider</label>
                      <select 
                        id="email-provider" 
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                      >
                        <option value="smtp">SMTP</option>
                        <option value="sendgrid" selected>SendGrid</option>
                        <option value="mailchimp">Mailchimp</option>
                        <option value="ses">Amazon SES</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="api-key" className="text-sm font-medium">API Key</label>
                      <input 
                        id="api-key" 
                        type="password"
                        value="••••••••••••••••"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-purple-100 rounded-md flex items-center justify-center text-purple-600">
                        <Video size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium">Video Conferencing</h3>
                        <p className="text-sm text-gray-500">Configure telehealth video provider</p>
                      </div>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Connected
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="video-provider" className="text-sm font-medium">Provider</label>
                      <select 
                        id="video-provider" 
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                      >
                        <option value="zoom">Zoom</option>
                        <option value="webrtc" selected>WebRTC (Built-in)</option>
                        <option value="twilio">Twilio</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="video-config" className="text-sm font-medium">Configuration</label>
                      <input 
                        id="video-config" 
                        type="text"
                        defaultValue="Default Configuration"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-healthcare-blue focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
                    Save Integration Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;
