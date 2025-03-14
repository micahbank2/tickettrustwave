
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DashboardFeatures from "@/components/features/DashboardFeatures";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturesPage = () => {
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
      </div>
      <Footer />
    </>
  );
};

export default FeaturesPage;
