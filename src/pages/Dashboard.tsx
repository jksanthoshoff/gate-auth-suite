import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { LogOut, GraduationCap, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Student Portal
              </h1>
              <p className="text-sm text-muted-foreground">Welcome to your dashboard</p>
            </div>
          </div>
          <Button variant="glow" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Success Message */}
        <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-8 text-center glow-border">
          <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Authentication Successful! 🎉</h2>
          <p className="text-lg text-muted-foreground mb-6">
            You have successfully signed up and verified your mobile number. 
            Your account is now active and ready to use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-muted/30 border border-border/50 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-primary">Next Steps</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Complete your profile</li>
                <li>• Join student groups</li>
                <li>• Explore campus resources</li>
              </ul>
            </div>
            <div className="bg-muted/30 border border-border/50 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-accent">Features Available</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Academic calendar</li>
                <li>• Grade tracking</li>
                <li>• Event notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;