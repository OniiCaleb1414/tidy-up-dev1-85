
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Users, Zap, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EarlyTester = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: "Missing Information",
        description: "Please enter both your name and email.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Welcome to the Beta!",
        description: "You're now on our early tester list. We'll be in touch soon!",
      });
      
      setEmail("");
      setName("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-teal-50 to-blue-50">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl text-gray-900">CleanBnb</span>
            </Link>
            <Button asChild variant="ghost">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Beta Launch - Limited Access
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Be Among The First To Experience
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              The Future of Cleaning
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join our exclusive beta program and get early access to CleanBnb's revolutionary 
            cleaning marketplace. Help us shape the future while enjoying exclusive benefits.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Beta Tester Exclusive Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <CardContent className="pt-6">
                <Gift className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">50% Off First 3 Cleanings</h3>
                <p className="text-gray-600">Exclusive discount for early testers on your first three bookings</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Priority Access</h3>
                <p className="text-gray-600">Get first access to new features and premium maids in your area</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 border-teal-200 hover:border-teal-300 transition-colors">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Direct Feedback Channel</h3>
                <p className="text-gray-600">Your input directly shapes our product development</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Form */}
          <Card className="max-w-md mx-auto border-2 border-gradient-to-r from-purple-200 to-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Join The Beta Program
              </CardTitle>
              <p className="text-gray-600">Be among the first 100 testers</p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining Beta..." : "Get Early Access"}
                </Button>
              </form>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                By joining, you agree to provide feedback and help us improve the platform.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto text-center max-w-2xl">
          <h3 className="text-2xl font-bold mb-6">Join 500+ Beta Testers Already Signed Up</h3>
          <div className="flex justify-center items-center space-x-4 text-gray-600">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm">And many more...</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarlyTester;
