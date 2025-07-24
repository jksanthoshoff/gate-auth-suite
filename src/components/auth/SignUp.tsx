import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, EyeOff, User, Mail, Lock, Phone, Hash, UserCheck } from 'lucide-react';
import AuthLayout from './AuthLayout';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    rollNumber: '',
    gender: '',
    year: '',
    branch: '',
    mobile: ''
  });
  const navigate = useNavigate();

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Final Year'];
  const branches = [
    'Computer Science Engineering',
    'Information Technology',
    'Electronics & Communication',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electrical Engineering',
    'Chemical Engineering',
    'Biotechnology'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      // Navigate to OTP verification
      navigate('/verify-otp', { state: { mobile: formData.mobile } });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AuthLayout
      title="Join the Portal"
      subtitle="Create your student account to get started"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 ? (
          <>
            {/* Step 1: Basic Information */}
            <div className="space-y-4">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-2">
                  1
                </div>
                <p className="text-sm text-muted-foreground">Personal Information</p>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 input-gate h-12"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  College Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@college.edu"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 input-gate h-12"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 input-gate h-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-sm font-medium text-foreground">
                  Mobile Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="pl-10 input-gate h-12"
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              variant="gate"
              size="xl"
              className="w-full"
            >
              Continue to Academic Info
            </Button>
          </>
        ) : (
          <>
            {/* Step 2: Academic Information */}
            <div className="space-y-4">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold mb-2">
                  2
                </div>
                <p className="text-sm text-muted-foreground">Academic Details</p>
              </div>

              {/* Roll Number */}
              <div className="space-y-2">
                <Label htmlFor="rollNumber" className="text-sm font-medium text-foreground">
                  Roll Number
                </Label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="rollNumber"
                    name="rollNumber"
                    type="text"
                    placeholder="Your roll number"
                    value={formData.rollNumber}
                    onChange={handleInputChange}
                    className="pl-10 input-gate h-12"
                    required
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">Gender</Label>
                <Select onValueChange={(value) => handleSelectChange('gender', value)} required>
                  <SelectTrigger className="input-gate h-12">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Year */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">Academic Year</Label>
                <Select onValueChange={(value) => handleSelectChange('year', value)} required>
                  <SelectTrigger className="input-gate h-12">
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toLowerCase().replace(' ', '-')}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Branch */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">Branch/Department</Label>
                <Select onValueChange={(value) => handleSelectChange('branch', value)} required>
                  <SelectTrigger className="input-gate h-12">
                    <SelectValue placeholder="Select your branch" />
                  </SelectTrigger>
                  <SelectContent>
                    {branches.map((branch) => (
                      <SelectItem key={branch} value={branch.toLowerCase().replace(/\s+/g, '-')}>
                        {branch}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="glow"
                size="lg"
                className="flex-1"
                onClick={() => setCurrentStep(1)}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="gate"
                size="lg"
                className="flex-1"
              >
                <UserCheck className="w-4 h-4 mr-2" />
                Verify Mobile
              </Button>
            </div>
          </>
        )}

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              to="/signin"
              className="text-primary hover:text-primary-glow transition-colors font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignUp;