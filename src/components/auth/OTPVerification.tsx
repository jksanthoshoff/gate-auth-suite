import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Shield, RefreshCw, CheckCircle, Smartphone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from './AuthLayout';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const mobile = location.state?.mobile || '+91 9876543210';
  const maskedMobile = mobile.replace(/(\+91\s)(\d{2})(\d{6})(\d{2})/, '$1$2******$4');

  useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setCanResend(true);
    }
  }, [timeLeft, canResend]);

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsVerifying(false);
      toast({
        title: "Account Created Successfully!",
        description: "Welcome to the student portal",
      });
      navigate('/dashboard');
    }, 2000);
  };

  const handleResendOTP = () => {
    setCanResend(false);
    setTimeLeft(30);
    setOtp('');
    toast({
      title: "OTP Sent",
      description: "A new OTP has been sent to your mobile number",
    });
  };

  return (
    <AuthLayout
      title="Verify Your Mobile"
      subtitle="We've sent a 6-digit code to your mobile number"
    >
      <div className="space-y-8">
        {/* Mobile Number Display */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20">
            <Smartphone className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Code sent to</p>
            <p className="text-lg font-semibold text-foreground">{maskedMobile}</p>
          </div>
        </div>

        {/* OTP Input */}
        <div className="space-y-4">
          <div className="text-center">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
              className="justify-center"
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="w-12 h-12 text-lg input-gate" />
                <InputOTPSlot index={1} className="w-12 h-12 text-lg input-gate" />
                <InputOTPSlot index={2} className="w-12 h-12 text-lg input-gate" />
                <InputOTPSlot index={3} className="w-12 h-12 text-lg input-gate" />
                <InputOTPSlot index={4} className="w-12 h-12 text-lg input-gate" />
                <InputOTPSlot index={5} className="w-12 h-12 text-lg input-gate" />
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          <p className="text-xs text-center text-muted-foreground">
            Enter the 6-digit code sent to your mobile number
          </p>
        </div>

        {/* Timer and Resend */}
        <div className="text-center space-y-2">
          {!canResend ? (
            <p className="text-sm text-muted-foreground">
              Resend code in <span className="text-primary font-semibold">{timeLeft}s</span>
            </p>
          ) : (
            <Button
              variant="link"
              onClick={handleResendOTP}
              className="text-primary hover:text-primary-glow p-0 h-auto"
            >
              <RefreshCw className="w-4 h-4 mr-1" />
              Resend OTP
            </Button>
          )}
        </div>

        {/* Verify Button */}
        <Button
          onClick={handleVerifyOTP}
          variant="gate"
          size="xl"
          className="w-full"
          disabled={otp.length !== 6 || isVerifying}
        >
          {isVerifying ? (
            <>
              <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
              Verifying...
            </>
          ) : (
            <>
              <Shield className="w-5 h-5 mr-2" />
              Verify & Create Account
            </>
          )}
        </Button>

        {/* Security Notice */}
        <div className="bg-muted/30 border border-border/50 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="text-foreground font-medium mb-1">Secure Verification</p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                This verification ensures the security of your account and helps us verify your identity as a genuine student.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default OTPVerification;