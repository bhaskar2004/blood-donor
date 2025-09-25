import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Heart, User, Droplets, MapPin, Phone, Mail, Calendar, CheckCircle, Info, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AddDonorFormProps {
  onBackToHome: () => void;
}

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];


const AddDonorForm = ({ onBackToHome }: AddDonorFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    city: "",
    age: "",
    lastDonation: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.bloodGroup || !formData.city) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const donorData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        bloodGroup: formData.bloodGroup,
        city: formData.city,
        lastDonation: formData.lastDonation || new Date().toISOString().split('T')[0],
        availability: "Available",
      };

      const apiUrl = import.meta.env.VITE_API_URL || '/api';
      const response = await fetch(`${apiUrl}/api/donors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donorData),
      });

      if (!response.ok) {
        throw new Error('Failed to register donor');
      }

      toast({
        title: "Registration Successful! 🎉",
        description: "Thank you for becoming a blood donor. You'll be contacted when needed.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        bloodGroup: "",
        city: "",
        age: "",
        lastDonation: "",
      });
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card shadow-card py-6 px-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={onBackToHome}
            className="text-primary hover:bg-primary/10 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-primary p-4 rounded-full">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Become a Life-Saving Hero
            </h1>
            <p className="text-muted-foreground text-lg">
              Join our community of donors and help save lives in your area
            </p>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Info Alert */}
        {/* <Alert className="mb-8 bg-accent border-primary/20">
          <Info className="h-4 w-4" />
          <AlertDescription className="text-accent-foreground">
            <strong>Note:</strong> This form currently saves data locally for demonstration. 
            Connect to Supabase to store donor information permanently in a database.
          </AlertDescription>
        </Alert> */}

        <Card className="shadow-elegant">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-foreground">Donor Registration Form</CardTitle>
            <CardDescription className="text-muted-foreground">
              Fill in your details to join our donor community
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center text-foreground">
                    <User className="w-4 h-4 text-primary mr-2" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-background"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age" className="flex items-center text-foreground">
                    <Calendar className="w-4 h-4 text-primary mr-2" />
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="bg-background"
                    min="18"
                    max="65"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center text-foreground">
                    <Mail className="w-4 h-4 text-primary mr-2" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-background"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center text-foreground">
                    <Phone className="w-4 h-4 text-primary mr-2" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-background"
                    required
                  />
                </div>
              </div>

              {/* Blood & Location Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="flex items-center text-foreground">
                    <Droplets className="w-4 h-4 text-primary mr-2" />
                    Blood Group *
                  </Label>
                  <Select value={formData.bloodGroup} onValueChange={(value) => handleInputChange('bloodGroup', value)}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select your blood group" />
                    </SelectTrigger>
                    <SelectContent>
                      {BLOOD_GROUPS.map((group) => (
                        <SelectItem key={group} value={group}>
                          {group}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="flex items-center text-foreground">
                    <MapPin className="w-4 h-4 text-primary mr-2" />
                    City *
                  </Label>
                  <Input
                    id="city"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="bg-background"
                    required
                  />
                </div>
              </div>

              {/* Last Donation Date */}
              <div className="space-y-2">
                <Label htmlFor="lastDonation" className="flex items-center text-foreground">
                  <Calendar className="w-4 h-4 text-primary mr-2" />
                  Last Donation Date (Optional)
                </Label>
                <Input
                  id="lastDonation"
                  type="date"
                  value={formData.lastDonation}
                  onChange={(e) => handleInputChange('lastDonation', e.target.value)}
                  className="bg-background"
                />
                <p className="text-sm text-muted-foreground">
                  Leave blank if you haven't donated before
                </p>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth text-lg py-6"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-3"></div>
                      Registering...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      Register as Blood Donor
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-card rounded-xl shadow-card">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Save Lives</h3>
            <p className="text-muted-foreground text-sm">Help emergency patients and those in need</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-card">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Join Community</h3>
            <p className="text-muted-foreground text-sm">Connect with like-minded heroes</p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-card">
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-card-foreground">Health Benefits</h3>
            <p className="text-muted-foreground text-sm">Regular health checkups and benefits</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 px-4 bg-muted text-center">
        <p className="text-muted-foreground text-lg font-medium">
           "Just a small amount of your blood can save someone’s life. Be a hero, donate blood."
        </p>
      </footer>
    </div>
  );
};

export default AddDonorForm;