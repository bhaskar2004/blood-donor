import { Button } from "@/components/ui/button";
import { Heart, Droplets, Users, Shield, ArrowRight, Star, Award, Plus } from "lucide-react";
import heroImage from "@/assets/hero-blood-donation.jpg";

interface HomePageProps {
  onFindDonors: () => void;
  onBecomeDonor: () => void;
}

const HomePage = ({ onFindDonors, onBecomeDonor }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-primary-foreground/20 p-4 rounded-full animate-scale-in">
                <Droplets className="w-20 h-20 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Save Lives in Your
              <span className="block text-primary-glow">Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect with volunteer blood donors and be the bridge between life and death. Every donation makes a difference.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              onClick={onFindDonors}
              className="text-lg px-8 py-4 bg-card text-primary hover:bg-card/90 shadow-glow transition-smooth hover-scale group"
            >
              <Heart className="w-5 h-5 mr-2 group-hover:text-red-500 transition-colors" />
              Find Donors Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={onBecomeDonor}
              className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth hover-scale"
            >
              <Plus className="w-5 h-5 mr-2" />
              Become a Donor
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80">Active Donors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">1200+</div>
              <div className="text-primary-foreground/80">Lives Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/80">Available</div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-20 max-w-6xl mx-auto animate-fade-in">
          <img
            src={heroImage}
            alt="Blood donation community - diverse people donating blood in modern medical facility"
            className="rounded-3xl shadow-elegant w-full h-[500px] object-cover hover-scale"
          />
        </div>
      </section>

      {/* Why Blood Donation Matters */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Blood Donation Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of heroes making a real difference in their communities every single day
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-accent to-accent/50 shadow-card transition-smooth hover:shadow-elegant hover-scale">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-accent-foreground">Save Lives Daily</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every 2 seconds, someone needs blood. Your single donation can help save up to three lives instantly.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-accent to-accent/50 shadow-card transition-smooth hover:shadow-elegant hover-scale">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-accent-foreground">Community Impact</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Join a network of heroes supporting accident victims, surgery patients, and those with blood disorders.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-accent to-accent/50 shadow-card transition-smooth hover:shadow-elegant hover-scale">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-accent-foreground">Safe & Simple</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Modern donation is safe, quick, and monitored by trained medical professionals with strict protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Stories from Our Heroes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-smooth">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-muted-foreground italic text-lg mb-4">
                "Thanks to this platform, I found a donor for my father's emergency surgery within 2 hours. 
                The donors were so responsive and caring."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-foreground font-semibold">R</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Rahul Sharma</p>
                  <p className="text-muted-foreground">Grateful Family Member</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elegant transition-smooth">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-muted-foreground italic text-lg mb-4">
                "Being a donor through this platform gives me so much satisfaction. 
                I've helped 8 families this year and made lifelong connections."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-foreground font-semibold">P</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Priya Patel</p>
                  <p className="text-muted-foreground">Regular Donor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-hero text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="mb-12">
            <Award className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Join the Life-Saving Community
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you need a donor or want to become one, you're just one click away from making a life-changing impact.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={onFindDonors}
              className="text-xl px-10 py-5 bg-card text-primary hover:bg-card/90 shadow-glow transition-smooth hover-scale group"
            >
              <Heart className="w-6 h-6 mr-3 group-hover:text-red-500 transition-colors" />
              Find Donors
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={onBecomeDonor}
              className="text-xl px-10 py-5 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-smooth hover-scale"
            >
              <Droplets className="w-6 h-6 mr-3" />
              Become a Hero
            </Button>
          </div>
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