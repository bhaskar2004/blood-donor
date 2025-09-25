import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import DonorDirectory from "@/components/DonorDirectory";
import AddDonorForm from "@/components/AddDonorForm";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'directory' | 'add-donor'>('home');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'directory':
        return <DonorDirectory onBackToHome={() => setCurrentView('home')} />;
      case 'add-donor':
        return <AddDonorForm onBackToHome={() => setCurrentView('home')} />;
      default:
        return (
          <HomePage 
            onFindDonors={() => setCurrentView('directory')} 
            onBecomeDonor={() => setCurrentView('add-donor')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      {renderCurrentView()}
    </div>
  );
};

export default Index;
