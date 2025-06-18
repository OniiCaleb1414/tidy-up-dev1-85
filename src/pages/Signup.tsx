
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const [maidData, setMaidData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    location: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleCustomerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerData.name || !customerData.email || !customerData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (customerData.password !== customerData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Account Created!",
        description: "Welcome to CleanBnb! You can now start booking cleaning services.",
      });
    } catch (error) {
      toast({
        title: "Signup Failed",
        description: "There was an error creating your account. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMaidSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!maidData.name || !maidData.email || !maidData.password || !maidData.phone || !maidData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (maidData.password !== maidData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Application Submitted!",
        description: "Your maid application has been submitted for review. We'll contact you within 24 hours.",
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
        <div className="max-w-md mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Join CleanBnb</CardTitle>
              <p className="text-gray-600">Create your account to get started</p>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="customer" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="customer">Find a Maid</TabsTrigger>
                  <TabsTrigger value="maid">Become a Maid</TabsTrigger>
                </TabsList>
                
                <TabsContent value="customer">
                  <form onSubmit={handleCustomerSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="customer-name">Full Name</Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="customer-name"
                          placeholder="Enter your full name"
                          value={customerData.name}
                          onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="customer-email">Email Address</Label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="customer-email"
                          type="email"
                          placeholder="Enter your email"
                          value={customerData.email}
                          onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="customer-password">Password</Label>
                      <div className="relative mt-1">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="customer-password"
                          type="password"
                          placeholder="Create a password"
                          value={customerData.password}
                          onChange={(e) => setCustomerData({...customerData, password: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="customer-confirm-password">Confirm Password</Label>
                      <div className="relative mt-1">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="customer-confirm-password"
                          type="password"
                          placeholder="Confirm your password"
                          value={customerData.confirmPassword}
                          onChange={(e) => setCustomerData({...customerData, confirmPassword: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Creating Account..." : "Create Account"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="maid">
                  <form onSubmit={handleMaidSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="maid-name">Full Name</Label>
                      <div className="relative mt-1">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="maid-name"
                          placeholder="Enter your full name"
                          value={maidData.name}
                          onChange={(e) => setMaidData({...maidData, name: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="maid-email">Email Address</Label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="maid-email"
                          type="email"
                          placeholder="Enter your email"
                          value={maidData.email}
                          onChange={(e) => setMaidData({...maidData, email: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="maid-phone">Phone Number</Label>
                      <Input
                        id="maid-phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={maidData.phone}
                        onChange={(e) => setMaidData({...maidData, phone: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="maid-location">Service Area</Label>
                      <Input
                        id="maid-location"
                        placeholder="e.g., Downtown, Westside"
                        value={maidData.location}
                        onChange={(e) => setMaidData({...maidData, location: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="maid-password">Password</Label>
                      <div className="relative mt-1">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="maid-password"
                          type="password"
                          placeholder="Create a password"
                          value={maidData.password}
                          onChange={(e) => setMaidData({...maidData, password: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="maid-confirm-password">Confirm Password</Label>
                      <div className="relative mt-1">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="maid-confirm-password"
                          type="password"
                          placeholder="Confirm your password"
                          value={maidData.confirmPassword}
                          onChange={(e) => setMaidData({...maidData, confirmPassword: e.target.value})}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting Application..." : "Apply to Become a Maid"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <Separator className="my-6" />

              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  Continue with Google
                </Button>
                <Button variant="outline" className="w-full">
                  Continue with Facebook
                </Button>
              </div>

              <div className="text-center text-sm text-gray-600 mt-6">
                Already have an account?{" "}
                <Link to="/login" className="text-teal-600 hover:text-teal-700 font-medium">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
