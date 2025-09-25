import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, AlertCircle } from "lucide-react";
import SearchBar from "./SearchBar";
import DonorCard from "./DonorCard";
import donorsData from "@/data/donors.json";

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

interface DonorDirectoryProps {
  onBackToHome: () => void;
}

const DonorDirectory = ({ onBackToHome }: DonorDirectoryProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");
  const [donors] = useState<Donor[]>(donorsData);

  // Filter donors based on search criteria
  const filteredDonors = useMemo(() => {
    return donors.filter((donor) => {
      const matchesBloodGroup = 
        selectedBloodGroup === "All" || donor.bloodGroup === selectedBloodGroup;
      const matchesSearch = 
        searchQuery === "" || 
        donor.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        donor.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesBloodGroup && matchesSearch;
    });
  }, [donors, selectedBloodGroup, searchQuery]);

  // Stats for display
  const totalDonors = donors.length;
  const availableDonors = donors.filter(d => d.availability === "Available").length;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card shadow-card py-6 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={onBackToHome}
              className="text-primary hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1 text-primary" />
                <span>{availableDonors} available donors</span>
              </div>
            </div>
          </div>
          
          <SearchBar
            searchQuery={searchQuery}
            selectedBloodGroup={selectedBloodGroup}
            onSearchChange={setSearchQuery}
            onBloodGroupChange={setSelectedBloodGroup}
          />
        </div>
      </header>

      {/* Results */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Blood Donor Directory
          </h1>
          <p className="text-muted-foreground">
            {filteredDonors.length > 0 
              ? `Found ${filteredDonors.length} donor${filteredDonors.length !== 1 ? 's' : ''}`
              : 'No donors found matching your criteria'
            }
            {(searchQuery || selectedBloodGroup !== "All") && (
              <span className="ml-2">
                {searchQuery && `in "${searchQuery}"`}
                {searchQuery && selectedBloodGroup !== "All" && " with "}
                {selectedBloodGroup !== "All" && `blood group ${selectedBloodGroup}`}
              </span>
            )}
          </p>
        </div>

        {/* Donor Cards Grid */}
        {filteredDonors.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDonors.map((donor) => (
              <DonorCard key={donor.id} donor={donor} />
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="text-center py-16">
            <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No donors found
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Try adjusting your search criteria or check back later as new donors join our community.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedBloodGroup("All");
              }}
              className="hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Urgent Notice */}
        {filteredDonors.length > 0 && (
          <div className="mt-12 bg-accent border border-primary/20 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-accent-foreground mb-2">
              🚨 Emergency Blood Needs
            </h3>
            <p className="text-muted-foreground">
              If this is an emergency, please contact your nearest hospital or blood bank immediately. 
              This directory is for connecting with voluntary donors.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 px-4 bg-muted text-center">
        <p className="text-muted-foreground text-lg font-medium">
          💝 "One pint of blood can save three lives." 💝
        </p>
      </footer>
    </div>
  );
};

export default DonorDirectory;