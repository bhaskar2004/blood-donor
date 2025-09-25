import { useState } from "react";
import HomePage from "@/components/HomePage";
import DonorDirectory from "@/components/DonorDirectory";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'directory'>('home');

  if (currentView === 'directory') {
    return (
      <DonorDirectory onBackToHome={() => setCurrentView('home')} />
    );
  }

  return (
    <HomePage onFindDonors={() => setCurrentView('directory')} />
  );
};

export default Index;
