
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Banner from "@/components/layout/Banner";
import Footer from "@/components/layout/Footer";
import DashboardFeatures from "@/components/features/DashboardFeatures";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, BarChart3, Users } from "lucide-react";

const Solutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner 
        message="New: AI-powered fraud detection now available!" 
        link={{
          text: "Learn more",
          url: "/features"
        }}
      />
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete <span className="title-gradient">Solutions</span> for Ticket Marketplaces
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how SeatHaven can transform your ticket marketplace with enhanced security, trust, and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardHeader>
                <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Fraud Prevention</CardTitle>
                <CardDescription>
                  AI-powered fraud detection to identify and prevent scams before they happen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li>Machine learning algorithms</li>
                  <li>Real-time transaction monitoring</li>
                  <li>Pattern recognition</li>
                  <li>Identity verification</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Secure Escrow</CardTitle>
                <CardDescription>
                  Protected transactions with our advanced escrow payment system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li>Multi-step verification</li>
                  <li>Instant fund transfers</li>
                  <li>Buyer/seller protection</li>
                  <li>Dispute resolution</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Trust Metrics</CardTitle>
                <CardDescription>
                  Build community confidence with transparent trust scoring.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li>Comprehensive user ratings</li>
                  <li>Transaction history analysis</li>
                  <li>Verification badges</li>
                  <li>Behavioral metrics</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>User Experience</CardTitle>
                <CardDescription>
                  Intuitive design and seamless processes for all users.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                  <li>Responsive design</li>
                  <li>Streamlined checkout</li>
                  <li>Real-time notifications</li>
                  <li>Personalized recommendations</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>

          <DashboardFeatures />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
