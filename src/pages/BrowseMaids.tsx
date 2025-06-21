
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import MaidCard from "@/components/MaidCard";

const allMaids = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 127,
    price: 25,
    location: "Downtown",
    verified: true,
    specialties: ["Deep Cleaning", "Eco-Friendly"]
  },
  {
    id: 2,
    name: "Maria Garcia",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 89,
    price: 22,
    location: "Westside",
    verified: true,
    specialties: ["Regular Cleaning", "Move-in/out"]
  },
  {
    id: 3,
    name: "Jennifer Lee",
    image: "/placeholder.svg",
    rating: 5.0,
    reviews: 156,
    price: 28,
    location: "North Hills",
    verified: true,
    specialties: ["Luxury Homes", "Pet-Friendly"]
  },
  {
    id: 4,
    name: "Amanda Chen",
    image: "/placeholder.svg",
    rating: 4.7,
    reviews: 203,
    price: 24,
    location: "East Bay",
    verified: true,
    specialties: ["Office Cleaning", "Post-Construction"]
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 178,
    price: 26,
    location: "South Side",
    verified: true,
    specialties: ["Apartment Cleaning", "Weekly Service"]
  },
  {
    id: 6,
    name: "Michelle Taylor",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 134,
    price: 23,
    location: "Central",
    verified: true,
    specialties: ["Deep Cleaning", "Move-in/out"]
  }
];

const BrowseMaids = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [priceRange, setPriceRange] = useState([15, 35]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredMaids = allMaids.filter(maid => {
    const matchesSearch = maid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         maid.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = !selectedLocation || maid.location === selectedLocation;
    const matchesPrice = maid.price >= priceRange[0] && maid.price <= priceRange[1];
    
    return matchesSearch && matchesLocation && matchesPrice;
  });

  const locations = Array.from(new Set(allMaids.map(maid => maid.location)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <Navbar />
      
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-4">
        <div className="flex items-center justify-center space-x-2">
          <Play className="h-5 w-5" />
          <p className="text-sm font-medium">
            🎮 Interactive Demo - Try searching, filtering, and booking a cleaning service!
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Browse Cleaning Professionals</h1>
          <p className="text-lg text-gray-600">Find the perfect maid for your cleaning needs - Click on any profile to view details and book!</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>

          {showFilters && (
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="All locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All locations</SelectItem>
                        {locations.map(location => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price Range: ${priceRange[0]} - ${priceRange[1]}/hour
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={50}
                      min={15}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            {filteredMaids.length} {filteredMaids.length === 1 ? 'maid' : 'maids'} found
          </p>
        </div>

        {/* Maids Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaids.map((maid) => (
            <MaidCard key={maid.id} maid={maid} />
          ))}
        </div>

        {filteredMaids.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No maids found matching your criteria.</div>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedLocation("");
                setPriceRange([15, 35]);
              }}
              className="mt-4"
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseMaids;
