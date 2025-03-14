
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import BlurCard from "@/components/ui/BlurCard";

const Dashboard = () => {
  const navigate = useNavigate();

  // This is a placeholder - will be developed in Part 2
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        <div className="layout-grid">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
            <p className="text-muted-foreground">
              This dashboard will be fully implemented in Part 2 of the development.
            </p>
          </div>

          <BlurCard className="p-8 max-w-xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <p>Dashboard features coming soon:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Overview Panel with transaction summaries</li>
                <li>Marketplace with ticket listings</li>
                <li>Transaction History & Notifications</li>
                <li>Profile & Settings</li>
                <li>Trust Score Analytics</li>
              </ul>
              <Button onClick={() => navigate("/")}>
                Return to Homepage
              </Button>
            </div>
          </BlurCard>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
