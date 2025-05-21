
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { FileText, Plus, FileCheck, FileMinus } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const CarePlans = () => {
  const isMobile = useIsMobile();
  
  // Sample care plan data
  const carePlans = [
    { 
      id: 1, 
      name: 'Post-Surgery Recovery', 
      category: 'Surgical',
      tasks: 14,
      duration: '4 weeks',
      assignedTo: 32,
      createdBy: 'Dr. Sarah Johnson',
    },
    { 
      id: 2, 
      name: 'Chronic Pain Management', 
      category: 'Pain Management',
      tasks: 10,
      duration: '8 weeks',
      assignedTo: 18,
      createdBy: 'Dr. Michael Chen',
    },
    { 
      id: 3, 
      name: 'Diabetes Monitoring', 
      category: 'Chronic Disease',
      tasks: 21,
      duration: '12 weeks',
      assignedTo: 47,
      createdBy: 'Dr. Emily Rodriguez',
    },
    { 
      id: 4, 
      name: 'Mental Health Check-in', 
      category: 'Mental Health',
      tasks: 7,
      duration: '6 weeks',
      assignedTo: 15,
      createdBy: 'Dr. Sarah Johnson',
    },
    { 
      id: 5, 
      name: 'Cardiac Rehabilitation', 
      category: 'Cardiology',
      tasks: 18,
      duration: '8 weeks',
      assignedTo: 23,
      createdBy: 'Dr. Michael Chen',
    },
  ];
  
  // Sample care plan tasks for a selected plan
  const carePlanTasks = [
    { id: 1, description: 'Daily walking exercise (15 minutes)', frequency: 'Daily', type: 'Activity' },
    { id: 2, description: 'Blood pressure measurement', frequency: 'Twice daily', type: 'Measurement' },
    { id: 3, description: 'Pain level assessment', frequency: 'Daily', type: 'Assessment' },
    { id: 4, description: 'Medication adherence check', frequency: 'Daily', type: 'Medication' },
    { id: 5, description: 'Wound care and dressing change', frequency: 'Every 48 hours', type: 'Treatment' },
    { id: 6, description: 'Daily wellness questionnaire', frequency: 'Daily', type: 'Assessment' },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Care Plans</h1>
        <p className="text-gray-600">Manage treatment and recovery plans for patients</p>
      </div>
      
      <div className="mb-6 flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="flex items-center gap-2">
            <FileText size={16} />
            All Plans
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Most Used
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Recently Added
          </Button>
        </div>
        
        <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
          <Plus size={16} className="mr-2" />
          Create Care Plan
        </Button>
      </div>
      
      <Tabs defaultValue="plans" className="w-full">
        <TabsList>
          <TabsTrigger value="plans">Care Plan Templates</TabsTrigger>
          <TabsTrigger value="tasks">Plan Tasks</TabsTrigger>
        </TabsList>
        
        <TabsContent value="plans" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Care Plan Templates</CardTitle>
              <CardDescription>Standardized care plans that can be assigned to patients</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className={isMobile ? "hidden" : ""}>Category</TableHead>
                    <TableHead>Tasks</TableHead>
                    <TableHead className={isMobile ? "hidden" : ""}>Duration</TableHead>
                    <TableHead className={isMobile ? "hidden" : ""}>Assigned To</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {carePlans.map((plan) => (
                    <TableRow key={plan.id}>
                      <TableCell className="font-medium">{plan.name}</TableCell>
                      <TableCell className={isMobile ? "hidden" : ""}>{plan.category}</TableCell>
                      <TableCell>{plan.tasks}</TableCell>
                      <TableCell className={isMobile ? "hidden" : ""}>{plan.duration}</TableCell>
                      <TableCell className={isMobile ? "hidden" : ""}>{plan.assignedTo} patients</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">Duplicate</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tasks" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Care Plan Tasks</CardTitle>
              <CardDescription>Individual tasks that make up care plans</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {carePlanTasks.map((task) => (
                    <TableRow key={task.id}>
                      <TableCell className="font-medium">{task.description}</TableCell>
                      <TableCell>{task.frequency}</TableCell>
                      <TableCell>{task.type}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">Delete</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <Plus size={16} />
                  Add Task
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default CarePlans;
