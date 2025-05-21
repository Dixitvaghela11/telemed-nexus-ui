
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Calendar, Mail, FileText, Lock, Stethoscope } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

const Profile = () => {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      fullName: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@telemedical.com',
      phoneNumber: '(555) 123-4567',
      specialization: 'Cardiology',
      licenseNumber: 'MD12345678',
      biography: 'Board-certified cardiologist with over 10 years of experience in treating cardiovascular conditions and preventive cardiology.',
    }
  });
  
  const handleSaveProfile = (data: any) => {
    toast({
      title: "Profile updated",
      description: "Your profile information has been successfully updated.",
    });
    console.log('Profile data:', data);
  };

  const handleChangePassword = () => {
    toast({
      title: "Password change requested",
      description: "A password reset link has been sent to your email.",
    });
  };

  return (
    <DashboardLayout role="doctor">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        <p className="text-gray-600">Manage your account information</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Summary Card */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-healthcare-blue-light flex items-center justify-center mb-4">
                <span className="text-4xl font-medium text-healthcare-blue">SJ</span>
              </div>
              
              <h2 className="text-xl font-semibold">Dr. Sarah Johnson</h2>
              <p className="text-gray-600">Cardiologist</p>
              
              <Badge className="mt-2 bg-healthcare-blue text-white">Verified</Badge>
              
              <div className="w-full mt-6 space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>sarah.johnson@telemedical.com</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Member since May 2023</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-gray-500" />
                  <span>License #MD12345678</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6"
                variant="outline"
                onClick={() => {
                  toast({
                    title: "View public profile",
                    description: "Opening your public profile view...",
                  });
                }}
              >
                View Public Profile
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Profile Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal and professional details</CardDescription>
          </CardHeader>
          
          <Tabs defaultValue="personal">
            <CardContent>
              <TabsList className="mb-4">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="professional">Professional Info</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              
              <Form {...form}>
                <TabsContent value="personal" className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="button"
                    onClick={form.handleSubmit(handleSaveProfile)}
                    className="bg-healthcare-blue hover:bg-healthcare-blue-dark"
                  >
                    Save Changes
                  </Button>
                </TabsContent>
                
                <TabsContent value="professional" className="space-y-4">
                  <FormField
                    control={form.control}
                    name="specialization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Medical Specialization</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="licenseNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>License Number</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="biography"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional Biography</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-24" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="button"
                    onClick={form.handleSubmit(handleSaveProfile)}
                    className="bg-healthcare-blue hover:bg-healthcare-blue-dark"
                  >
                    Save Changes
                  </Button>
                </TabsContent>
                
                <TabsContent value="security" className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Lock className="h-5 w-5 text-healthcare-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium">Password</h3>
                        <p className="text-sm text-gray-600 mb-4">Change your account password</p>
                        <Button 
                          variant="outline"
                          onClick={handleChangePassword}
                        >
                          Change Password
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Stethoscope className="h-5 w-5 text-healthcare-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
                        <Button>
                          Enable 2FA
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Form>
            </CardContent>
          </Tabs>
          
          <CardFooter className="border-t p-6">
            <div className="flex justify-between items-center w-full">
              <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                Deactivate Account
              </Button>
              <Button 
                onClick={form.handleSubmit(handleSaveProfile)}
                className="bg-healthcare-blue hover:bg-healthcare-blue-dark"
              >
                Save All Changes
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
