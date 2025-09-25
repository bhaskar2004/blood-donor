import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Droplets, MapPin } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  selectedBloodGroup: string;
  onSearchChange: (query: string) => void;
  onBloodGroupChange: (bloodGroup: string) => void;
}

const BLOOD_GROUPS = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const SearchBar = ({
  searchQuery,
  selectedBloodGroup,
  onSearchChange,
  onBloodGroupChange,
}: SearchBarProps) => {
  return (
    <div className="bg-card rounded-xl shadow-card p-6 mb-8">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Blood Group Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center">
            <Droplets className="w-4 h-4 text-primary mr-2" />
            Blood Group
          </label>
          <Select value={selectedBloodGroup} onValueChange={onBloodGroupChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select blood group" />
            </SelectTrigger>
            <SelectContent>
              {BLOOD_GROUPS.map((bloodGroup) => (
                <SelectItem key={bloodGroup} value={bloodGroup}>
                  {bloodGroup === "All" ? "All Blood Groups" : bloodGroup}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* City/Location Search */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground flex items-center">
            <MapPin className="w-4 h-4 text-primary mr-2" />
            City or Location
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Enter city name..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;