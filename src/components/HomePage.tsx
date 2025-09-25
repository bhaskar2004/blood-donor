import { Button } from "@/components/ui/button";
import { Heart, Droplets, Users, Shield } from "lucide-react";
import heroImage from "@/assets/hero-blood-donation.jpg";

const HomePage = ({ onFindDonors }: { onFindDonors: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <Droplets className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Local Blood Donor Finder
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Connect with life-saving heroes in your community. Every donation can save up to three lives.
            </p>
          </div>
          
          <Button 
            size="lg" 
            variant="secondary"
            onClick={onFindDonors}
            className="text-lg px-8 py-4 bg-card text-primary hover:bg-card/90 shadow-glow transition-smooth"
          >
            <Heart className="w-5 h-5 mr-2" />
            Find a Donor Near You
          </Button>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16 max-w-5xl mx-auto">
          <img
            src={heroImage}
            alt="Blood donation community - diverse people donating blood in modern medical facility"
            className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Why Blood Donation Matters */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Blood Donation Matters
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-accent shadow-card transition-smooth hover:shadow-elegant">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-accent-foreground">Save Lives Daily</h3>
              <p className="text-muted-foreground">
                Every 2 seconds, someone needs blood. Your single donation can help save up to three lives.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-accent shadow-card transition-smooth hover:shadow-elegant">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-accent-foreground">Community Impact</h3>
              <p className="text-muted-foreground">
                Join a network of heroes supporting accident victims, surgery patients, and those with blood disorders.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-accent shadow-card transition-smooth hover:shadow-elegant">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-accent-foreground">Safe & Simple</h3>
              <p className="text-muted-foreground">
                Modern donation is safe, quick, and monitored by trained medical professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-primary text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Find compatible donors in your area or register to become a donor yourself.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={onFindDonors}
            className="text-lg px-8 py-4 bg-card text-primary hover:bg-card/90 shadow-glow transition-smooth"
          >
            Start Searching Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted text-center">
        <p className="text-muted-foreground text-lg font-medium">
          💝 "One pint of blood can save three lives." 💝
        </p>
      </footer>
    </div>
  );
};

export default HomePage;