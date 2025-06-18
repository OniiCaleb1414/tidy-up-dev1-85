
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Shield, Calendar, MessageCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";

const maidData = {
  1: {
    id: 1,
    name: "Sarah Johnson",
    image: "/placeholder.svg",
    rating: 4.9,
    reviews: 127,
    price: 25,
    location: "Downtown",
    verified: true,
    specialties: ["Deep Cleaning", "Eco-Friendly"],
    bio: "Professional cleaner with 5+ years of experience. I specialize in eco-friendly cleaning solutions and deep cleaning services. I take pride in my attention to detail and ensuring your home is spotless.",
    experience: "5+ years",
    languages: ["English", "Spanish"],
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    responseTime: "Within 2 hours"
  }
};

const reviews = [
  {
    id: 1,
    author: "John D.",
    rating: 5,
    date: "2 weeks ago",
    text: "Sarah did an amazing job! My apartment has never been cleaner. Very professional and reliable."
  },
  {
    id: 2,
    author: "Emma S.",
    rating: 5,
    date: "1 month ago",
    text: "Excellent service! Sarah was punctual, thorough, and used eco-friendly products as promised."
  },
  {
    id: 3,
    author: "Michael R.",
    rating: 4,
    date: "2 months ago",
    text: "Great attention to detail. Would definitely book again!"
  }
];

const MaidProfile = () => {
  const { id } = useParams();
  const maid = maidData[id as keyof typeof maidData] || maidData[1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src={maid.image} alt={maid.name} />
                      <AvatarFallback>{maid.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {maid.verified && (
                      <Badge className="absolute -top-2 -right-2 bg-green-500 hover:bg-green-600">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{maid.name}</h1>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{maid.rating}</span>
                        <span className="text-gray-500">({maid.reviews} reviews)</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{maid.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {maid.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">{maid.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Details */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                    <p className="text-gray-600">{maid.experience}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                    <p className="text-gray-600">{maid.languages.join(", ")}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Availability</h4>
                    <p className="text-gray-600">{maid.availability.join(", ")}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-600">{maid.responseTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reviews ({maid.reviews})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{review.author[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold">{review.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span>{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900">
                    ${maid.price}
                    <span className="text-lg font-normal text-gray-600">/hour</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button asChild className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700" size="lg">
                    <Link to={`/book/${maid.id}`}>
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full" size="lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    Usually responds {maid.responseTime.toLowerCase()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaidProfile;
