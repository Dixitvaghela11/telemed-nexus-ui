
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { User, UserPlus, UserX } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const UserManagement = () => {
  const isMobile = useIsMobile();
  
  // Sample user data
  const users = [
    { id: 1, name: 'Dr. Sarah Johnson', email: 'sarah.johnson@example.com', role: 'Doctor', specialty: 'Cardiology', status: 'Active' },
    { id: 2, name: 'Dr. Michael Chen', email: 'michael.chen@example.com', role: 'Doctor', specialty: 'Neurology', status: 'Active' },
    { id: 3, name: 'Dr. Emily Rodriguez', email: 'emily.rodriguez@example.com', role: 'Doctor', specialty: 'Pediatrics', status: 'Inactive' },
    { id: 4, name: 'John Williams', email: 'john.williams@example.com', role: 'Admin', specialty: 'N/A', status: 'Active' },
    { id: 5, name: 'Lisa Thompson', email: 'lisa.thompson@example.com', role: 'Admin', specialty: 'N/A', status: 'Active' },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
        <p className="text-gray-600">Manage doctors, admins, and user accounts</p>
      </div>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <User size={16} />
            All Users
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Doctors
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Admins
          </Button>
        </div>
        
        <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
          <UserPlus size={16} className="mr-2" />
          Add User
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>System Users</CardTitle>
          <CardDescription>Manage all users in the TeleMed Nexus platform</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className={isMobile ? "hidden" : ""}>Role</TableHead>
                <TableHead className={isMobile ? "hidden" : ""}>Specialty</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className={isMobile ? "hidden" : ""}>{user.role}</TableCell>
                  <TableCell className={isMobile ? "hidden" : ""}>{user.specialty}</TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <UserX size={16} />
                      </Button>
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

export default UserManagement;
