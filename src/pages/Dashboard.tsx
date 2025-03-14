
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlurCard from "@/components/ui/BlurCard";
import BuyerDashboard from "@/components/dashboard/BuyerDashboard";
import SellerDashboard from "@/components/dashboard/SellerDashboard";
import TrustScore from "@/components/ui/TrustScore";
import { Bell, Settings, Ticket, Wallet, User, HelpCircle } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [dashboardType, setDashboardType] = useState("buyer");

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Manage your tickets, transactions, and account
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Bell className="mr-1 h-4 w-4" /> Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="mr-1 h-4 w-4" /> Settings
              </Button>
              <Button>
                <HelpCircle className="mr-1 h-4 w-4" /> Support
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="buyer" className="w-full" onValueChange={setDashboardType}>
            <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
              <TabsTrigger value="buyer">Buyer Dashboard</TabsTrigger>
              <TabsTrigger value="seller">Seller Dashboard</TabsTrigger>
            </TabsList>
            
            <TabsContent value="buyer" className="mt-0">
              <BuyerDashboard />
            </TabsContent>
            
            <TabsContent value="seller" className="mt-0">
              <SellerDashboard />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
