
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DashboardFeatures from "@/components/features/DashboardFeatures";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <div className="layout-grid">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">
              Platform <span className="title-gradient">Features</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our innovative platform combines cutting-edge technology with user-centered design to create 
              the safest ticket exchange experience possible.
            </p>
          </div>
        </div>
        
        <DashboardFeatures />

        <div className="container mx-auto px-4 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Discover Our <span className="title-gradient">Automation & Integration</span> Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Learn how our powerful API-driven architecture enables seamless automation, 
            third-party integrations, and a future-proof foundation.
          </p>
          <Button size="lg" onClick={() => navigate("/integrations")}>
            Explore Integrations <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FeaturesPage;
