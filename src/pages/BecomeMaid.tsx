
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, DollarSign, Clock, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

const BecomeMaid = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    experience: "",
    hourlyRate: "",
    services: [] as string[],
    availability: [] as string[],
    hasTransportation: false,
    hasInsurance: false,
    hasReferences: false,
    biography: "",
    password: "",
    confirmPassword: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const serviceOptions = [
    "Regular House Cleaning",
    "Deep Cleaning",
    "Move-in/Move-out Cleaning",
    "Office Cleaning",
    "Post-Construction Cleanup",
    "Carpet Cleaning",
    "Window Cleaning",
    "Laundry Services",
    "Organizing Services"
  ];

  const availabilityOptions = [
    "Monday Morning",
    "Monday Afternoon",
    "Tuesday Morning", 
    "Tuesday Afternoon",
    "Wednesday Morning",
    "Wednesday Afternoon",
    "Thursday Morning",
    "Thursday Afternoon",
    "Friday Morning",
    "Friday Afternoon",
    "Saturday Morning",
    "Saturday Afternoon",
    "Sunday Morning",
    "Sunday Afternoon"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({...formData, services: [...formData.services, service]});
    } else {
      setFormData({...formData, services: formData.services.filter(s => s !== service)});
    }
  };

  const handleAvailabilityChange = (slot: string, checked: boolean) => {
    if (checked) {
      setFormData({...formData, availability: [...formData.availability, slot]});
    } else {
      setFormData({...formData, availability: formData.availability.filter(s => s !== slot)});
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return;
    }

    if (formData.services.length === 0) {
      toast({
        title: "Services Required",
        description: "Please select at least one service you can provide.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying! We'll review your application and contact you within 24-48 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
        experience: "",
        hourlyRate: "",
        services: [],
        availability: [],
        hasTransportation: false,
        hasInsurance: false,
        hasReferences: false,
        biography: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      toast({
        title: "Application Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Team of Professional Cleaners
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Turn your cleaning expertise into a flexible, well-paying career. 
            Join hundreds of successful maids earning $25-50+ per hour.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Great Pay</CardTitle>
              <CardDescription>$25-50+ per hour</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Flexible Schedule</CardTitle>
              <CardDescription>Work when you want</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Steady Clients</CardTitle>
              <CardDescription>Build regular customer base</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <CardTitle className="text-lg">5-Star Platform</CardTitle>
              <CardDescription>Top-rated marketplace</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Application Form */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Maid Application Form</CardTitle>
            <CardDescription>
              Please fill out all required information. We'll review your application within 24-48 hours.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      placeholder="Enter your address"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      placeholder="Enter your ZIP code"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Professional Information</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="hourlyRate">Desired Hourly Rate ($)</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      placeholder="e.g., 25"
                      value={formData.hourlyRate}
                      onChange={(e) => setFormData({...formData, hourlyRate: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label>Services You Can Provide *</Label>
                  <div className="grid md:grid-cols-3 gap-2 mt-2">
                    {serviceOptions.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                        />
                        <Label htmlFor={service} className="text-sm">{service}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Your Availability</Label>
                  <div className="grid md:grid-cols-4 gap-2 mt-2">
                    {availabilityOptions.map((slot) => (
                      <div key={slot} className="flex items-center space-x-2">
                        <Checkbox
                          id={slot}
                          checked={formData.availability.includes(slot)}
                          onCheckedChange={(checked) => handleAvailabilityChange(slot, checked as boolean)}
                        />
                        <Label htmlFor={slot} className="text-sm">{slot}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Requirements</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="transportation"
                      checked={formData.hasTransportation}
                      onCheckedChange={(checked) => setFormData({...formData, hasTransportation: checked as boolean})}
                    />
                    <Label htmlFor="transportation">I have reliable transportation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="insurance"
                      checked={formData.hasInsurance}
                      onCheckedChange={(checked) => setFormData({...formData, hasInsurance: checked as boolean})}
                    />
                    <Label htmlFor="insurance">I have liability insurance (preferred)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="references"
                      checked={formData.hasReferences}
                      onCheckedChange={(checked) => setFormData({...formData, hasReferences: checked as boolean})}
                    />
                    <Label htmlFor="references">I can provide references</Label>
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div>
                <Label htmlFor="biography">Tell Us About Yourself</Label>
                <Textarea
                  id="biography"
                  placeholder="Describe your cleaning experience, approach, and what makes you special..."
                  value={formData.biography}
                  onChange={(e) => setFormData({...formData, biography: e.target.value})}
                  className="min-h-24"
                />
              </div>

              {/* Account Setup */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Account Setup</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Application Review</h4>
                <p className="text-sm text-gray-600">We'll review your application within 24-48 hours</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Background Check</h4>
                <p className="text-sm text-gray-600">Quick background verification for customer safety</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Start Earning</h4>
                <p className="text-sm text-gray-600">Get approved and start receiving booking requests</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BecomeMaid;
