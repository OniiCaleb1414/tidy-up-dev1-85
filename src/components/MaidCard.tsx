
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface Maid {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  location: string;
  verified: boolean;
  specialties: string[];
}

interface MaidCardProps {
  maid: Maid;
}

const MaidCard = ({ maid }: MaidCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={maid.image}
          alt={maid.name}
          className="w-full h-48 object-cover"
        />
        {maid.verified && (
          <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
            <Shield className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900">{maid.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{maid.rating}</span>
            <span className="text-sm text-gray-500">({maid.reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{maid.location}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {maid.specialties.map((specialty) => (
            <Badge key={specialty} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-900">${maid.price}</span>
            <span className="text-gray-600">/hour</span>
          </div>
          <Button asChild className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
            <Link to={`/maid/${maid.id}`}>View Profile</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MaidCard;
