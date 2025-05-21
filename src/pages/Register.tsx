
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/components/layout/AuthLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Mail, User, Phone, Lock, UploadCloud } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [tab, setTab] = useState('patient');
  
  // Patient form state
  const [patientData, setPatientData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  
  // Doctor form state
  const [doctorData, setDoctorData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    credentials: null as File | null,
  });

  const handlePatientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatientData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDoctorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'credentials' && files && files.length > 0) {
      setDoctorData((prev) => ({ ...prev, credentials: files[0] }));
    } else {
      setDoctorData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePatientSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (patientData.password !== patientData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Registration successful",
        description: "Your account has been created. You can now log in.",
      });
      
      navigate('/login');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "There was a problem creating your account.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDoctorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (doctorData.password !== doctorData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
      });
      return;
    }
    
    if (!doctorData.credentials) {
      toast({
        variant: "destructive",
        title: "Missing credentials",
        description: "Please upload your medical license or credentials.",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Registration submitted",
        description: "Your registration has been submitted for review. You'll be notified once approved.",
      });
      
      navigate('/login');
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "There was a problem submitting your registration.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Create an Account" 
      subtitle="Join our telehealth platform" 
      authType="register"
    >
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="patient">Patient</TabsTrigger>
          <TabsTrigger value="doctor">Doctor</TabsTrigger>
        </TabsList>
        
        <TabsContent value="patient">
          <form onSubmit={handlePatientSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="patient-name">Full Name</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <Input
                  id="patient-name"
                  name="name"
                  placeholder="John Doe"
                  value={patientData.name}
                  onChange={handlePatientChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="patient-email">Email</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <Input
                  id="patient-email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={patientData.email}
                  onChange={handlePatientChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="patient-phone">Phone Number</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Phone size={18} className="text-gray-400" />
                </div>
                <Input
                  id="patient-phone"
                  name="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={patientData.phone}
                  onChange={handlePatientChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="patient-password">Password</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <Input
                  id="patient-password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={patientData.password}
                  onChange={handlePatientChange}
                  className="pl-10"
                  required
                  minLength={8}
                />
              </div>
              <p className="text-xs text-gray-500">Must be at least 8 characters</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="patient-confirm-password">Confirm Password</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <Input
                  id="patient-confirm-password"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={patientData.confirmPassword}
                  onChange={handlePatientChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-healthcare-blue hover:bg-healthcare-blue-dark"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Patient Account"}
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="doctor">
          <form onSubmit={handleDoctorSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="doctor-name">Full Name</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <Input
                  id="doctor-name"
                  name="name"
                  placeholder="Dr. Jane Smith"
                  value={doctorData.name}
                  onChange={handleDoctorChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="doctor-email">Email</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <Input
                  id="doctor-email"
                  name="email"
                  type="email"
                  placeholder="doctor@hospital.com"
                  value={doctorData.email}
                  onChange={handleDoctorChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="doctor-phone">Phone Number</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Phone size={18} className="text-gray-400" />
                </div>
                <Input
                  id="doctor-phone"
                  name="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={doctorData.phone}
                  onChange={handleDoctorChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="doctor-credentials">Medical License/Credentials</Label>
              <div className="flex items-center justify-center w-full">
                <label 
                  htmlFor="doctor-credentials" 
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadCloud className="w-8 h-8 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PDF, PNG, JPG (MAX. 5MB)</p>
                  </div>
                  <Input
                    id="doctor-credentials"
                    name="credentials"
                    type="file"
                    className="hidden"
                    onChange={handleDoctorChange}
                    accept=".pdf,.png,.jpg,.jpeg"
                  />
                </label>
              </div>
              {doctorData.credentials && (
                <p className="text-xs text-green-500 mt-1">
                  File uploaded: {doctorData.credentials.name}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="doctor-password">Password</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <Input
                  id="doctor-password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={doctorData.password}
                  onChange={handleDoctorChange}
                  className="pl-10"
                  required
                  minLength={8}
                />
              </div>
              <p className="text-xs text-gray-500">Must be at least 8 characters</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="doctor-confirm-password">Confirm Password</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <Input
                  id="doctor-confirm-password"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={doctorData.confirmPassword}
                  onChange={handleDoctorChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-healthcare-blue hover:bg-healthcare-blue-dark"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit for Verification"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </AuthLayout>
  );
};

export default Register;
