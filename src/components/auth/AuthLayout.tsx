import { useState, useEffect } from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  const [gateOpen, setGateOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGateOpen(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary-glow rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Gate Animation Container */}
        <div className={`gate-container relative rounded-2xl min-h-[600px] ${gateOpen ? 'gate-opening' : ''}`}>
          {/* Gate Doors */}
          <div className="gate-left rounded-l-2xl flex items-center justify-center">
            <div className="text-primary/50 font-bold text-2xl rotate-90">SECURE</div>
          </div>
          <div className="gate-right rounded-r-2xl flex items-center justify-center">
            <div className="text-primary/50 font-bold text-2xl -rotate-90">ACCESS</div>
          </div>

          {/* Main Auth Content */}
          <div className={`relative z-10 p-8 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 glow-border transition-all duration-700 ${gateOpen ? 'animate-fade-up' : 'opacity-0'}`}>
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {title}
              </h1>
              <p className="text-muted-foreground text-sm">
                {subtitle}
              </p>
            </div>

            {/* Form Content */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;