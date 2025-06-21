
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, Users, Shield, Star, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Trusted Cleaning
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Marketplace
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Connect with verified cleaning professionals or join our network of trusted maids. 
            Making homes spotless, one booking at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-lg px-8 py-6">
              <Link to="/browse">
                <Search className="h-5 w-5 mr-2" />
                Find a Maid
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2">
              <Link to="/signup">
                <Users className="h-5 w-5 mr-2" />
                Become a Maid
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CleanBnb?</h2>
          <p className="text-lg text-gray-600">Trusted by thousands of customers and cleaning professionals</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <CardTitle>Verified Professionals</CardTitle>
              <CardDescription>
                All maids are background-checked and verified for your peace of mind
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>5-Star Service</CardTitle>
              <CardDescription>
                Average rating of 4.8/5 from thousands of satisfied customers
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Flexible Scheduling</CardTitle>
              <CardDescription>
                Book same-day or schedule weeks in advance - it's up to you
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* For Customers Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">For Homeowners</h2>
              <p className="text-lg text-gray-600 mb-8">
                Skip the hassle of finding reliable cleaning help. Browse profiles, read reviews, 
                and book the perfect maid for your needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Booking</h3>
                    <p className="text-gray-600">Book in just a few clicks with transparent pricing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Insured & Bonded</h3>
                    <p className="text-gray-600">All services are covered for your protection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Satisfaction Guaranteed</h3>
                    <p className="text-gray-600">Not happy? We'll make it right or refund you</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
                <Link to="/browse">
                  Browse Maids <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                        <Star className="h-4 w-4 fill-current" />
                      </div>
                      <span className="text-sm text-gray-600 ml-2">5.0 (127 reviews)</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  "Amazing service! Sarah was thorough, professional, and left my home spotless. 
                  Will definitely book again!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Maids Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Earning Potential</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average per hour:</span>
                    <span className="font-semibold text-green-600">$25-35</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Top earners make:</span>
                    <span className="font-semibold text-green-600">$50+/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weekly potential:</span>
                    <span className="font-semibold text-green-600">$800-1,500</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">For Cleaning Professionals</h2>
              <p className="text-lg text-gray-600 mb-8">
                Turn your cleaning skills into a thriving business. Set your own schedule, 
                rates, and build a loyal customer base.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Schedule</h3>
                    <p className="text-gray-600">Work when you want, as much as you want</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Competitive Pay</h3>
                    <p className="text-gray-600">Earn $25-50+ per hour based on your experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Marketing Support</h3>
                    <p className="text-gray-600">We help you find customers and build your reputation</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Link to="/signup">
                  Apply Now <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Join thousands of satisfied customers and professional cleaners
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/browse">Find Cleaning Help</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-teal-600">
              <Link to="/signup">Start Earning Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
