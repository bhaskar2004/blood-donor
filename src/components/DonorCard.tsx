import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Droplets, Calendar, CheckCircle } from "lucide-react";

interface Donor {
  id: string;
  name: string;
  bloodGroup: string;
  city: string;
  phone: string;
  email: string;
  lastDonation: string;
  availability: string;
}

interface DonorCardProps {
  donor: Donor;
}

const DonorCard = ({ donor }: DonorCardProps) => {
  const handleCall = () => {
    window.open(`tel:${donor.phone}`, '_self');
  };

  const handleEmail = () => {
    window.open(`mailto:${donor.email}?subject=Blood Donation Request`, '_blank');
  };

  const handleWhatsApp = () => {
    const message = `Hi ${donor.name}, I found your contact through the Blood Donor Directory. I would like to know if you're available for blood donation. Thank you!`;
    const url = `https://wa.me/+91${donor.phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Card className="transition-smooth hover:shadow-elegant hover:scale-105 bg-card border border-border">
      <CardContent className="p-6">
        {/* Header with name and blood group */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              {donor.name}
            </h3>
            <Badge 
              variant="secondary" 
              className="bg-primary text-primary-foreground font-bold text-sm px-3 py-1"
            >
              <Droplets className="w-3 h-3 mr-1" />
              {donor.bloodGroup}
            </Badge>
          </div>
          
          <div className="flex items-center text-green-600">
            <CheckCircle className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">{donor.availability}</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm">{donor.city}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <Phone className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-mono">{donor.phone}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm">Last donated: {formatDate(donor.lastDonation)}</span>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCall}
            className="text-xs p-2 hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <Phone className="w-3 h-3 mr-1" />
            Call
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleEmail}
            className="text-xs p-2 hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            <Mail className="w-3 h-3 mr-1" />
            Email
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleWhatsApp}
            className="text-xs p-2 hover:bg-green-600 hover:text-white transition-smooth"
          >
            💬 WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonorCard;