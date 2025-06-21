
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { User, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-xl text-gray-900">CleanBnb</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/browse" 
              className={`transition-colors ${
                location.pathname === "/browse" 
                  ? "text-teal-600 font-semibold" 
                  : "text-gray-700 hover:text-teal-600"
              }`}
            >
              Browse Maids
            </Link>
            <Link 
              to="/become-maid" 
              className={`transition-colors ${
                location.pathname === "/become-maid" 
                  ? "text-teal-600 font-semibold" 
                  : "text-gray-700 hover:text-teal-600"
              }`}
            >
              Become a Maid
            </Link>
            <div className="flex items-center space-x-2">
              <Button asChild variant="ghost">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/browse" 
                className={`transition-colors ${
                  location.pathname === "/browse" 
                    ? "text-teal-600 font-semibold" 
                    : "text-gray-700 hover:text-teal-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Maids
              </Link>
              <Link 
                to="/become-maid" 
                className={`transition-colors ${
                  location.pathname === "/become-maid" 
                    ? "text-teal-600 font-semibold" 
                    : "text-gray-700 hover:text-teal-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Become a Maid
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button asChild variant="ghost" className="justify-start">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
