
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import MaidCard from "@/components/MaidCard";

const featuredMaids = [
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
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Cleaning Service
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book trusted, verified maids in your area. Professional cleaning services 
            at your fingertips, just like booking your next stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
              <Link to="/browse">Browse Maids</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
              <Link to="/signup">Become a Maid</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CleanBnb?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
                <p className="text-gray-600">All maids are background-checked and verified for your peace of mind.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Book instantly or schedule in advance. Choose times that work for you.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-gray-600">Read reviews, see ratings, and enjoy satisfaction guaranteed service.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Maids */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Cleaning Professionals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredMaids.map((maid) => (
              <MaidCard key={maid.id} maid={maid} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/browse">View All Maids</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust CleanBnb for their cleaning needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/browse">Book Your First Cleaning</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
