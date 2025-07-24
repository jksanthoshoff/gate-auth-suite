import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Shield, Zap } from 'lucide-react';
import authHero from '@/assets/auth-hero.jpg';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.1),transparent_50%)]" />
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src={authHero} 
            alt="Digital Gate" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="animate-fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-float">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Student Portal Gate
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Your unofficial college portal built by students, for students. 
              Access your academic information, connect with peers, and stay updated with campus life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                variant="gate"
                size="xl"
                onClick={() => navigate('/signin')}
                className="w-full sm:w-auto"
              >
                <Shield className="w-5 h-5 mr-2" />
                Access Portal
              </Button>
              <Button
                variant="glow"
                size="xl"
                onClick={() => navigate('/signup')}
                className="w-full sm:w-auto"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-6 glow-border">
                <Shield className="w-8 h-8 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Secure Access</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced gate-style authentication with mobile OTP verification
                </p>
              </div>
              <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-6 glow-border">
                <Users className="w-8 h-8 text-accent mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Student Community</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with your peers and stay updated with campus activities
                </p>
              </div>
              <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl p-6 glow-border">
                <Zap className="w-8 h-8 text-primary-glow mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Fast & Modern</h3>
                <p className="text-sm text-muted-foreground">
                  Lightning-fast interface with cutting-edge design
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary-glow rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default Index;
