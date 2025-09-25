
import { Button } from "@/components/ui/button";
import { Heart, Droplets, Plus, Mail, MapPin, Linkedin } from "lucide-react";

interface HomePageProps {
  onFindDonors: () => void;
  onBecomeDonor: () => void;
}

const HomePage = ({ onFindDonors, onBecomeDonor }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 text-center bg-red-600">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Droplets className="w-20 h-20 text-white mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Save Lives in Your Community
            </h1>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
              Connect with blood donors and make a difference. Every donation saves lives.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onFindDonors}
              className="text-lg px-8 py-4 bg-white text-red-600 hover:bg-gray-100"
            >
              <Heart className="w-5 h-5 mr-2" />
              Find Donors
            </Button>
            
            <Button 
              size="lg" 
              onClick={onBecomeDonor}
              className="text-lg px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600"
            >
              <Plus className="w-5 h-5 mr-2" />
              Become a Donor
            </Button>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Why Blood Donation Matters
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-3">Save Lives</h3>
              <p className="text-gray-600">
                One donation can save up to three lives.
              </p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-3">Help Patients</h3>
              <p className="text-gray-600">
                Support accident victims and surgery patients.
              </p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Safe Process</h3>
              <p className="text-gray-600">
                Quick, safe, and monitored by professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Droplets className="w-8 h-8 text-red-500 mr-2" />
                <span className="text-xl font-bold">BloodConnect</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Connecting blood donors with those in need. Every donation saves lives and builds stronger communities.
              </p>
              <p className="text-red-400 font-medium">
                "Just a small amount of your blood can save someone’s life. Be a hero, donate blood."
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={onFindDonors} className="text-gray-300 hover:text-white transition-colors">Find Donors</button></li>
                <li><button onClick={onBecomeDonor} className="text-gray-300 hover:text-white transition-colors">Become a Donor</button></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>

            {/* Blood Types */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Blood Types</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-gray-300">A+</span>
                <span className="text-gray-300">A-</span>
                <span className="text-gray-300">B+</span>
                <span className="text-gray-300">B-</span>
                <span className="text-gray-300">AB+</span>
                <span className="text-gray-300">AB-</span>
                <span className="text-gray-300">O+</span>
                <span className="text-gray-300">O-</span>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:bhaskar7676798351@gmail.com" className="hover:text-white transition-colors">bhaskar7676798351@gmail.com</a>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>India</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/bhaskar-t-783aa3331/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span> </span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 BloodConnect. All rights reserved. | Made with ❤️ for humanity
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;