import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Droplets, Menu, X, Heart, Users, Plus } from "lucide-react";

interface NavbarProps {
  currentView: 'home' | 'directory' | 'add-donor';
  onNavigate: (view: 'home' | 'directory' | 'add-donor') => void;
}

const Navbar = ({ currentView, onNavigate }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as const, label: 'Home', icon: Heart },
    { id: 'directory' as const, label: 'Find Donors', icon: Users },
    { id: 'add-donor' as const, label: 'Become a Donor', icon: Plus },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover-scale" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-gradient-primary rounded-full p-2">
              <Droplets className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">
              Blood Donor Finder
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              const Icon = item.icon;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  onClick={() => onNavigate(item.id)}
                  className={`
                    flex items-center space-x-2 px-4 py-2 transition-smooth
                    ${isActive 
                      ? 'bg-primary text-primary-foreground shadow-glow' 
                      : 'hover:bg-accent hover:text-accent-foreground'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = currentView === item.id;
                const Icon = item.icon;
                
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center justify-start space-x-3 px-4 py-3 transition-smooth
                      ${isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-accent hover:text-accent-foreground'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;