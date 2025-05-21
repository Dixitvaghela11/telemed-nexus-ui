
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, User } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const CarePlans = () => {
  const { toast } = useToast();
  
  // Sample care plans data
  const carePlans = [
    {
      id: 1,
      patient: 'John Smith',
      title: 'Post-Surgery Recovery',
      startDate: '2025-05-01',
      endDate: '2025-06-30',
      progress: 75,
      tasks: 12,
      completed: 9,
      status: 'Active'
    },
    {
      id: 2,
      patient: 'Sarah Johnson',
      title: 'Diabetes Management',
      startDate: '2025-04-15',
      endDate: '2025-07-15',
      progress: 50,
      tasks: 8,
      completed: 4,
      status: 'Active'
    },
    {
      id: 3,
      patient: 'Michael Brown',
      title: 'Hypertension Control',
      startDate: '2025-05-10',
      endDate: '2025-08-10',
      progress: 30,
      tasks: 10,
      completed: 3,
      status: 'Active'
    },
    {
      id: 4,
      patient: 'Emma Wilson',
      title: 'Rehabilitation Program',
      startDate: '2025-03-20',
      endDate: '2025-06-20',
      progress: 90,
      tasks: 15,
      completed: 13,
      status: 'Active'
    },
  ];

  const handleViewPlan = (planId: number) => {
    toast({
      title: "Opening care plan",
      description: `Loading care plan #${planId}...`,
    });
  };

  return (
    <DashboardLayout role="doctor">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Care Plans</h1>
        <p className="text-gray-600">Manage your patient treatment plans</p>
      </div>
      
      <div className="mb-6 flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" className="flex items-center gap-2">
            <User size={16} />
            All Patients
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Active Plans
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            Completed
          </Button>
        </div>
        
        <Button className="bg-healthcare-blue text-white hover:bg-healthcare-blue-dark">
          <FileText size={16} className="mr-2" />
          New Care Plan
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>My Care Plans</CardTitle>
          <CardDescription>Active treatment plans for your patients</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {carePlans.map((plan) => (
              <Card key={plan.id} className="border shadow-sm">
                <CardContent className="p-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium text-lg">{plan.patient}</h3>
                    <Badge variant={plan.progress >= 70 ? "default" : "outline"}>
                      {plan.progress}% Complete
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-1">{plan.title}</p>
                  
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <Calendar size={14} className="mr-1" />
                    {plan.startDate} to {plan.endDate}
                  </div>
                  
                  <div className="mb-2">
                    <Progress value={plan.progress} className="h-2" />
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{plan.completed} of {plan.tasks} tasks completed</span>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-healthcare-blue"
                      onClick={() => handleViewPlan(plan.id)}
                    >
                      View Plan
                    </Button>
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

export default CarePlans;
