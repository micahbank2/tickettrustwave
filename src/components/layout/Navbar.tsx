
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MenuIcon, X, Search, Bell, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation links
  const navLinks = [
    { 
      name: "Platform", 
      path: "/platform",
      hasDropdown: true 
    },
    { 
      name: "Features", 
      path: "/features",
      hasDropdown: true 
    },
    { 
      name: "Solutions", 
      path: "/solutions",
      hasDropdown: true 
    },
    { 
      name: "Enterprise", 
      path: "/enterprise" 
    },
    { 
      name: "Developers", 
      path: "/developers" 
    },
    { 
      name: "Resources", 
      path: "/resources",
      hasDropdown: true 
    },
  ];

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border"
          : "bg-background border-transparent"
      )}
    >
      <div className="layout-grid flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 font-display font-bold text-xl"
        >
          <div className="w-8 h-8 hexagon bg-primary flex items-center justify-center">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span className="hidden sm:block">SeatHaven</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center",
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={16} className="ml-1" />}
            </Link>
          ))}
        </nav>

        {/* Search, notifications and authentication buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <button className="text-muted-foreground hover:text-foreground p-2 rounded-full">
            <Search size={18} />
          </button>
          
          <Button variant="outline" className="border-muted" asChild>
            <Link to="/auth?mode=signin">Sign In</Link>
          </Button>
          
          <Button asChild>
            <Link to="/auth?mode=signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-3">
          <button className="text-muted-foreground hover:text-foreground p-2">
            <Search size={20} />
          </button>
          
          <button
            className="p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="layout-grid py-4 space-y-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-between",
                    location.pathname === link.path
                      ? "bg-muted text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={16} />}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-2 pt-2 border-t border-border">
              <Button variant="outline" asChild className="w-full">
                <Link to="/auth?mode=signin">Sign In</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/auth?mode=signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
